<template>
  <div>
    <div class="add_unit_operation_div">
      <el-input v-model="unitName" placeholder="请输入内容" class="input"></el-input>
      <el-button type="primary" @click="addUnit">添加</el-button>
    </div>
    <el-table
      :data="unitList"
      border
      style="width: 100%">
      <el-table-column
        prop="unitId"
        align="center"
        label="编号"
        class="unit_operation_tr">
      </el-table-column>
      <el-table-column
        prop="unitName"
        label="单位"
        align="center"
        class="unit_operation_tr">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class="unit_operation_tr">
        <template slot-scope="scope">
          <el-button @click="deleteUnit(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                unitName: "",
                unitList: []
            }
        },
        methods: {
            /*删除*/
            deleteUnit(row) {
                this.$netUtils.get(this.$apis.delete_unit,
                    {unitId: row.unitId}
                ).then((response) => {
                    this.unitList = response.data
                })
            },
            /*添加*/
            addUnit() {
                if (this.unitName === "") {
                    this.$message('不能为空');
                    return
                }
                this.$netUtils.post(this.$apis.add_unit,
                    {unitName: this.unitName}
                ).then((response) => {
                    this.unitList = response.data
                })
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.unit_list).then((response) => {
                this.unitList = response.data;
            })
        }
    }
</script>

<style>
  .add_unit_operation_div {
    display: flex;
    height: 60px;
    padding: 0px 16px 0px 16px;
    align-items: center;
  }

  .add_unit_operation_div .input {
    width: 30%;
    margin-right: 20px;
  }

  .unit_operation_tr {
    width: 33.33%;
  }
</style>
