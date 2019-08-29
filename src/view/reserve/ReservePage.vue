<template>
  <div>
    <el-table
      :data="reserveList"
      border
      style="width: 100%">
      <el-table-column
        class="operation_div"
        prop="reserveId"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="publishPhone"
        label="手机号"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="goodName"
        label="名称"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="goodDesc"
        label="描述"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="goodPrice"
        label="价格"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="maxCount"
        label="最大数量"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="reserveFinishTime"
        label="预定时间"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="deliveryTime"
        label="派送时间"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="pickAddress"
        label="取货地址"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="attention"
        label="留言"
        class="operation_div">
      </el-table-column>
      <el-table-column
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
          <el-button @click="deleteReserveGood(scope.row)" type="danger" size="small" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                reserveList: []
            }
        },
        methods: {
            addReserveGood(row) {
                this.$router.push({
                    path: "reserve/add",
                    query: {
                        reserveId: row.reserveId,
                        type: 0
                    }
                })
            },
            editReserveGood(row) {
                this.$router.push({
                    path: "reserve/add",
                    query: {
                        reserveId: row.reserveId,
                        type: 1
                    }
                })
            },
            deleteReserveGood(row) {
                this.$netUtils.get(this.$apis.reserve_delete + row.reserveId).then((response) => {
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
