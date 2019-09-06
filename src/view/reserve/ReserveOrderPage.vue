<template>
  <div>
    <el-table
      :data="productOrderDetailList"
      border
      style="width: 100%">
      <el-table-column
        class="operation_div"
        prop="productDetail.productId"
        align="center"
        label="物品编号">
      </el-table-column>
      <el-table-column
        prop="productDetail.productName"
        align="center"
        label="名称"
        class="operation_div">
      </el-table-column>

      <el-table-column
        prop="productOrder.totalPrice"
        align="center"
        label="预计金额"
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
          <el-button @click="deleteUnit(scope.row)" type="primary" icon="el-icon-edit">查看</el-button>
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
    export default {
        data() {
            return {
                productOrderDetailList: [],
                allCount: 10
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.order_all_list, {
                orderStatus: 0,
            }).then((response) => {
                this.productOrderDetailList = response.data;
            })
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
