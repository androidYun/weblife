<template>
  <div style="width: 100px;height: 100px;background-color: #42b983">
    <el-row :gutter="20" class="community_rl_row">
      <el-col :span="8">
        <div class="item">
          <span class="title">添加小区名称</span>
          <el-input class="input" v-model="communityName" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" size="medium" @click="submitHomeService">添加</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                communityName: "",
            }
        },
        mounted() {
            console.log("ddd")
        }
    }
</script>

<style>

  .community_rl_row {
    margin-top: 20px;
  }

  .community_rl_row .item {
    display: flex;
  }

  .community_rl_row .item .title {
    font-size: 14px;
  }

  .community_rl_row .item .input {
    width: 200px;
  }
</style>
