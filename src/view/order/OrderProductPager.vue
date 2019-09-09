<template>
  <div>
    <el-table
      :data="productList"
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
    </el-table>

  </div>
</template>

<script>


    export default {
        data() {
            return {
                productList: []
            }
        },
        mounted() {
            let params = this.$route.query.params;
            let list = JSON.parse(params);
            this.productList = list;
        },
        props: {
            params: {
                type: String,
                default:
                    ""
            }
        }
    }
</script>

<style scoped>

</style>
