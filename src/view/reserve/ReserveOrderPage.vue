<template>
  <div>
    <el-table
      :data="reserveOrderList"
      border
      style="width: 100%">
      <el-table-column
        class="operation_div"
        prop="reserveGood.reserveId"
        align="center"
        label="物品编号">
      </el-table-column>
      <el-table-column
        prop="reserveGood.goodName"
        align="center"
        label="名称"
        class="operation_div">
      </el-table-column>

      <el-table-column
        prop="reserveOrder.buyCount"
        label="购买数量"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="reserveOrder.expectAmount"
        align="center"
        label="预计金额"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="reserveGood.reserveFinishTime"
        align="center"
        label="预定时间"
        class="operation_div">
      </el-table-column>
      <el-table-column
        prop="reserveGood.deliveryTime"
        align="center"
        label="派送时间"
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

  </div>
</template>

<script>
    export default {
        data() {
            return {
                reserveOrderList: []
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.reserve_order_detail, {reserveId: 5}).then((response) => {
                this.reserveOrderList = response.data;
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
