<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10">
        <div>
          <el-select v-model="orderStatus" placeholder="请选择不同状态">
            <el-option label="新订单" value="0"></el-option>
            <el-option label="确认收货" value="1"></el-option>
            <el-option label="已完成" value="2"></el-option>
            <el-option label="已取消" value="3"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="10">
        <div style="display: flex">
            <el-date-picker
              v-model="startTime"
              type="date"
              placeholder="开始日期">
            </el-date-picker>

            <el-date-picker
              v-model="endTime"
              align="right"
              type="date"
              placeholder="结束日期">
            </el-date-picker>
          <el-button type="primary" @click="clickFilter">筛选</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table
      :data="productOrderDetailList"
      border
      style="width: 100%">
      <el-table-column
        class="operation_div"
        prop="productOrder.orderNumber"
        align="center"
        label="订单编号">
      </el-table-column>
      <el-table-column
        align="center"
        label="收货地址"
        class="operation_div">
        <template slot-scope="scope">
          <span>{{scope.row.address.province+scope.row.address.city+scope.row.address.area+scope.row.address.defineAddress}}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="productOrder.totalPrice"
        align="center"
        label="预计金额"
        class="operation_div">
      </el-table-column>

      <el-table-column
        prop="productOrder.totalCount"
        align="center"
        label="订单物品数量"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="address.userName"
        align="center"
        label="姓名"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="address.phoneNumber"
        align="center"
        label="电话"
        class="operation_div">
      </el-table-column>

      <el-table-column
        align="center"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="lookProductList(scope.row)" type="primary" icon="el-icon-edit">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="allCount">
    </el-pagination>
  </div>
</template>

<script>
    import dateTime from '@/utils/DateTime'
    export default {
        data() {
            return {
                productOrderDetailList: [],
                allCount: 10,
                orderStatus: 0,
                startTime: null,
                endTime: null
            }
        },
        methods: {
            lookProductList(row) {
                this.$router.push({
                    path: "/main/order/product",
                    query: {
                        params: JSON.stringify(row.productDetailList)
                    }
                })
            },
            loadOrderList() {
                this.$netUtils.get(this.$apis.order_all_list, {
                    orderStatus: this.orderStatus,
                    startTime: dateTime.serializeDate(this.startTime),
                    endTime: dateTime.serializeDate(this.endTime)
                }).then((response) => {
                    this.productOrderDetailList = response.data;
                })
            },
            clickFilter() {
                this.loadOrderList();
            }
        },
        mounted() {
            this.loadOrderList();
        },
        props: {
            reserveId: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
  .operation_div {
    width: 10%;
  }
</style>
