<template>
  <div>
    <el-table
      :data="homeServiceList"
      border
      style="width: 100%">
      <el-table-column
        class="operation_div"
        prop="homeServiceId"
        label="编号">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="serviceContent"
        label="服务内容">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="workName"
        label="服务人姓名">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="serviceCompany"
        label="服务公司">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="workAddress"
        label="家政地址">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="workPhone"
        label="服务人员手机号">
      </el-table-column>
      <el-table-column
        class="operation_div"
        prop="serviceAmount"
        label="服务费">
      </el-table-column>
      <el-table-column
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="addHomeService(scope.row)" type="success" size="small" icon="el-icon-add">添加</el-button>
          <el-button @click="editHomeService(scope.row)" type="primary" size="small" icon="el-icon-edit">编辑
          </el-button>
          <el-button @click="deleteHomeService(scope.row)" type="danger" size="small" icon="el-icon-delete">删除
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
                homeServiceList: []
            }
        },
        methods: {
            deleteHomeService(row) {
                this.$netUtils.get(this.$apis.home_service_delete + "/" + row.homeServiceId).then((response) => {
                    this.homeServiceList = response.data;
                })
            },
            editHomeService(row) {
                this.$router.push({
                    path: "operation",
                    query: {
                        type: 1,
                        homeServiceId: row.homeServiceId
                    }
                },)
            },
            addHomeService(row) {
                this.$router.push({
                    path: "operation",
                    query: {
                        type: 0,
                        homeServiceId: row.homeServiceId
                    }
                })
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.home_service_list).then((response) => {
                this.homeServiceList = response.data;
            })
        }
    }
</script>

<style scoped>

</style>
