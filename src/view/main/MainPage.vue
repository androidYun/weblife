<template>
  <div>
    <el-row class="tac" :span="24">
      <el-col :span="3" class="navi">
        <h5 class="title">预购管理系统</h5>
        <el-menu
          default-active="/main/reserve"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router
          active-text-co>
          <el-menu-item
            index="/main/reserve">
            <i class="el-icon-menu"></i>
            <span slot="title">预购</span>
          </el-menu-item>

          <el-menu-item index="/main/reserve/order">
            <i class="el-icon-menu"></i>
            <span slot="title">预购订单</span>
          </el-menu-item>
          <el-menu-item index="/main/home/service">
            <i class="el-icon-document"></i>
            <span slot="title">家政服务</span>
          </el-menu-item>
          <el-menu-item index="/main/sell">
            <i class="el-icon-document"></i>
            <span slot="title">个人卖点</span>
          </el-menu-item>
          <el-menu-item
            index="/main/unit">
            <i class="el-icon-setting"></i>
            <span slot="title">单位</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
        }
    }
</script>

<style>
  .title {
    color: #FFFFFF;
  }

  .navi {
    min-height: 1000px;
    background-color: #545c64;
  }

  .content {
    min-height: 1000px;
  }
</style>
