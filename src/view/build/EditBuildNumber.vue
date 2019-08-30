<template>
  <div>
    <el-row :gutter="20" class="build_number_rl_row">
      <el-col :span="10">
        <div class="item">
          <span class="title">楼号</span>
          <el-input class="input" style="width: 80%;" v-model="buildNumber.buildName" placeholder="请输入楼号名称"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <span class="title">开始单元</span>
          <el-input class="input" v-model="buildNumber.startUnit" type="number" placeholder="请输入开始单元"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <span class="title">结束单元</span>
          <el-input class="input" v-model="buildNumber.endUnit" type="number" placeholder="请输入结束单元"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="build_number_rl_row">
      <el-col :span="5">
        <div class="item">
          <span class="title">开始楼层</span>
          <el-input class="input" v-model="buildNumber.startFloor" type="number" placeholder="请输入开始楼层"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <span class="title">结束楼层</span>
          <el-input class="input" v-model="buildNumber.endFloor" type="number" placeholder="请输入结束楼层"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <span class="title">开始户号</span>
          <el-input class="input" v-model="buildNumber.startNumber" type="number" placeholder="请输入开始户号"></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="item">
          <span class="title">结束户号</span>
          <el-input class="input" v-model="buildNumber.endNumber" type="number" placeholder="请输入结束户号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="build_number_rl_row">
      <el-button type="primary" size="medium" @click="updateBuildNumber">更新</el-button>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                buildNumber: {
                    buildName: "",
                    startUnit: "",
                    endUnit: "",
                    startFloor: "",
                    endFloor: "",
                    startNumber: "",
                    endNumber: "",
                }
            }
        },
        methods: {
            updateBuildNumber() {
                this.$netUtils.post(this.$apis.build_number_update, this.buildNumber).then((response) => {
                    this.$router.back();
                })
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.build_number_delete+"/"+this.$route.query.buildId).then((response) => {
                this.buildNumber = response.data;
            })
        }
    }
</script>

<style>
  .build_number_rl_row {
    margin-top: 20px;
  }

  .build_number_rl_row .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .build_number_rl_row .item .title {
    font-size: 14px;
    color: #333333;
    text-align: center;
    min-width: 60px;
  }

  .build_number_rl_row .item .input {
    width: 200px;
  }
</style>
