<template>
  <div class="login_body">

    <div class="content">
      <span class="title">预购管理系统</span>
      <el-input
        class="input"
        placeholder="请输入手机号"
        prefix-icon="el-icon-user"
        v-model="phoneNumber">
      </el-input>
      <el-input
        placeholder="请输入密码"
        class="input"
        prefix-icon="el-icon-unlock"
        v-model="password">
      </el-input>

      <div class="role">
        <template>
          <el-radio v-model="role" label="1">管理员</el-radio>
          <el-radio v-model="role" label="2">超级管理员</el-radio>
          <el-radio v-model="role" label="3">店主</el-radio>
        </template>

      </div>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                phoneNumber: "",
                password: "",
                role: '1'
            }
        },
        methods: {

            login() {
                let that = this;
                this.$netUtils.get(this.$apis.role_login, {
                    phoneNumber: this.phoneNumber,
                    password: this.password,
                    roleType: this.role
                }).then((response) => {
                    this.$sessionUtils.setLoginState(true);
                    this.$sessionUtils.setToken(response.data.token);
                    this.$router.push({
                        path: "/main"
                    })
                }).catch((error) => {
                    that.$message.error(error.msg);
                })
            }
        }
    }
</script>

<style>
  .login_body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
    background-color: #eff5f9;
  }

  .login_body .content {
    width: 50%;
    border-radius: 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    align-items: center;
    background-color: #FFFFFF;
  }

  .login_body .content .title {
    margin-top: 60px;
  }

  .login_body .content .input {
    width: 300px;
    margin-top: 20px;
  }

  .login_body .content .role {
    margin-top: 20px;
    display: flex;
    height: 60px;
  }
</style>
