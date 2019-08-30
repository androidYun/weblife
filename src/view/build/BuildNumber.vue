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
      <el-button type="primary" size="medium" @click="addBuildNumber">添加</el-button>
    </el-row>
    <el-table
      :data="buildNumberList"
      border
      style="width: 100%;margin-top:20px">
      <el-table-column
        prop="buildName"
        align="center"
        label="楼宇编号">
      </el-table-column>
      <el-table-column
        prop="startUnit"
        align="center"
        label="开始单元"
      >
      </el-table-column>
      <el-table-column
        prop="endUnit"
        align="center"
        label="结束单元"
      >
      </el-table-column>
      <el-table-column
        prop="startFloor"
        align="center"
        label="开始楼层"
      >
      </el-table-column>
      <el-table-column
        prop="endFloor"
        align="center"
        label="结束楼层"
      >
      </el-table-column>
      <el-table-column
        prop="startNumber"
        align="center"
        label="开始户数"
      >
      </el-table-column>
      <el-table-column
        prop="endNumber"
        align="center"
        label="结束户数"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="editBuildNumber(scope.row)" type="primary" size="small" icon="el-icon-edit">编辑单元
          </el-button>
          <el-button @click="deleteBuildNumber(scope.row)" type="danger" size="small" icon="el-icon-delete">删除
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
                buildNumber: {
                    communityId: this.$route.query.communityId,
                    buildName: "",
                    startUnit: "",
                    endUnit: "",
                    startFloor: "",
                    endFloor: "",
                    startNumber: "",
                    endNumber: "",
                },
                buildNumberList: []
            }
        },
        methods: {
            addBuildNumber() {
                this.$netUtils.post(this.$apis.build_number_add, this.buildNumber).then((response) => {
                    this.buildNumberList = response.data;
                }).catch((error) => {
                    this.$message({
                        message: error.msg,
                        type: 'warning'
                    });
                    return
                })
            },
            editBuildNumber(row) {
                this.$router.push({
                    path: "build/edit",
                    query: {
                        communityId: row.communityId,
                        buildId: row.buildId
                    }
                })
            },
            deleteBuildNumber(row) {
                this.$netUtils.get(this.$apis.build_number_delete+"/"+row.buildId).then((response) => {
                    this.loadBuildNumberList();
                }).catch((error) => {
                    this.$message({
                        message: error.msg,
                        type: 'warning'
                    });
                    return
                })
            },
            loadBuildNumberList() {
                this.$netUtils.get(this.$apis.build_number_list, {communityId: this.$route.query.communityId}).then((response) => {
                    this.buildNumberList = response.data;
                })
            }

        },
        mounted() {
            this.loadBuildNumberList();
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
