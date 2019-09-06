<template>
  <div>
    <el-table
      :data="reserveList"
      border
      style="width: 100%">
      <el-table-column
        align="center"
        class="operation_div"
        prop="productId"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="publishPhone"
        label="手机号"
        align="center"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="productName"
        label="名称"
        align="center"
        class="operation_div">
      </el-table-column>
      <el-table-column
        label="图片"
        align="center"
        class="operation_div">
        <template slot-scope="scope">
          <img style="width: 60px;height: 60px;"
               :src="scope.row.imageUrl"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="categoryName"
        align="center"
        label="类别"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="productDesc"
        align="center"
        label="描述"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="productPrice"
        align="center"
        label="价格"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="maxCount"
        label="最大数量"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="productFinishTime"
        label="预定时间"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="deliveryTime"
        label="派送时间"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="pickAddress"
        label="取货地址"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="attention"
        label="留言"
        class="operation_div">
      </el-table-column>
      <el-table-column
        align="center"
        prop="deliveryMoney"
        label="派送费用"
        class="operation_div">
      </el-table-column>
      <el-table-column
        label="操作"
        width="300">
        <template slot-scope="scope" class="operation_btn">
          <el-button @click="addReserveGood(scope.row)" type="success" size="small" icon="el-icon-add">添加</el-button>
          <el-button @click="editReserveGood(scope.row)" type="primary" size="small" icon="el-icon-edit">编辑</el-button>
          <el-button @click="deleteReserveGood(scope.row)" type="danger" size="small" icon="el-icon-delete">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                reserveList: [],
                imageUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2121206715,2955288754&fm=26&gp=0.jpg"
            }
        },
        methods: {
            addReserveGood(row) {
                this.$router.push({
                    path: "reserve/add",
                    query: {
                        reserveId: row.productId,
                        type: 0
                    }
                })
            },
            editReserveGood(row) {
                this.$router.push({
                    path: "reserve/add",
                    query: {
                        reserveId: row.productId,
                        type: 1
                    }
                })
            },
            deleteReserveGood(row) {
                this.$netUtils.get(this.$apis.reserve_delete + row.productId).then((response) => {
                    this.reserveList = response.data;
                })
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.reserve_good_list).then((response) => {
                    this.reserveList = response.data;
                }
            )
        }
    }
</script>

<style>

  .operation_div {
    width: 10%;
  }

  .operation_div .operation_btn {
    display: flex;
  }
</style>
