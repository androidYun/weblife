<template>
  <div>
    <div class="add_role_operation_div">
      <el-button type="primary" @click="addUser">添加</el-button>
    </div>
    <el-table
      :data="roleList"
      border
      style="width: 100%">
      <el-table-column
        prop="merchantId"
        align="center"
        label="用户编号"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        label="用户角色"
        align="center"
        class="role_operation_tr">
        <template slot-scope="scope">
          <span v-if="scope.row.roleType===0">超级管理员</span>
          <span v-else-if="scope.row.roleType===1">管理员</span>
          <span v-else-if="scope.row.roleType===2">普通会员</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名称"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="手机号"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        prop="merchantNo"
        label="商家编号"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        prop="openId"
        label="Openid"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        prop="secret"
        label="Secret"
        align="center"
        class="role_operation_tr">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class="role_operation_tr">
        <template slot-scope="scope">
          <el-button @click="deleteRole(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="updateRole(scope.row)" type="text" size="small" >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                roleList: []
            }
        },
        methods: {
            addUser() {
                this.$router.push({
                    path: "add",
                });
            },
            updateRole(row) {
                this.$router.push({
                    path: "edit",
                    query: {
                        merchantId: row.merchantId
                    }
                });
            },
            loadRoleList() {
                this.$netUtils.get(this.$apis.manage_user_list, {
                    merchantId: this.$sessionUtils.getMerchant()
                }).then((response) => {
                    this.roleList = response.data;
                })
            },
            deleteRole(row) {
                this.$netUtils.get(this.$apis.manage_user_delete + "/" + row.merchantId).then((response) => {
                    this.loadRoleList();
                })
            }
        },
        mounted() {
            this.loadRoleList();
        }
    }
</script>

<style scoped>
  .add_role_operation_div {
    display: flex;
  }

  .role_operation_tr {

  }
</style>
