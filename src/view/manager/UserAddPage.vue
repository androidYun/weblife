<template>
  <div class="manger_user_body">
    <el-row>
      <el-col :span="12">
        <div class="item">
          <span class="user_title">用户名称</span>
          <el-input class="user_input" v-model="roleInform.name" placeholder="请输入用户名"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="item">
          <span class="user_title">用户密码</span>
          <el-input class="user_input" v-model="roleInform.password" placeholder="请输入用户密码"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="item">
          <span class="user_title">手机号</span>
          <el-input class="user_input" v-model="roleInform.phoneNumber" placeholder="请输入手机号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="item">
          <span class="user_title">OpenId</span>
          <el-input class="user_input" placeholder="请输入OpenId" v-model="roleInform.openId"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="item">
          <span class="user_title">Secret</span>
          <el-input class="user_input" placeholder="请输入Secret" v-model="roleInform.secret"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="item">
          <el-button type="primary" @click="addUser">添加</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                roleInform: {
                    name: "",
                    password: "",
                    phoneNumber: "",
                    openId: "",
                    secret: "",
                    roleType: 1
                }
            }
        }, methods: {
            addUser() {
                this.$netUtils.post(this.$apis.manage_user_add, this.roleInform).then((response) => {
                    this.$router.back();
                })
            }
        }
    }
</script>

<style scoped>
  .manger_user_body {
    background-color: #EEEEEE;
    width: 40%;
    margin-top: 60px;
    margin-left: 50px;
    border-radius: 10px;
  }

  .item {
    justify-content: center;
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  .item .user_title {
    width: 20%;
  }

  .item .user_input {
    width: 60%;
    margin-left: 20px;
  }
</style>
