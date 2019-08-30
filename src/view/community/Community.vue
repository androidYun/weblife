<template>
  <div>
    <el-row :gutter="20" class="community_rl_row">
      <el-col :span="8">
        <div class="item">
          <span class="title">添加社区名称</span>
          <el-input class="input" v-model="community.communityName" placeholder="请输入社区名称"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">添加社区地址</span>
          <el-input class="input" v-model="community.communityAddress" placeholder="请输入社区地址"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" size="medium" @click="addCommunity">添加</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="communityList"
      border
      style="width: 100%;margin-top:20px">
      <el-table-column
        prop="communityId"
        align="center"
        label="社区编号">
      </el-table-column>
      <el-table-column
        prop="communityName"
        align="center"
        label="社区名称"
      >
      </el-table-column>
      <el-table-column
        prop="communityAddress"
        align="center"
        label="社区地址"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope" class="operation_btn">
          <el-button @click="addBuildNumber(scope.row)" type="success" size="small" icon="el-icon-add">添加单元
          </el-button>
          <el-button @click="editReserveGood(scope.row)" type="primary" size="small" icon="el-icon-edit">编辑单元
          </el-button>
          <el-button @click="editReserveGood(scope.row)" type="primary" size="small" icon="el-icon-edit">查看单元
          </el-button>
          <el-button @click="deleteReserveGood(scope.row)" type="danger" size="small" icon="el-icon-delete">删除
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
                community: {
                    communityName: "",
                    communityAddress: "",
                },
                communityList: []
            }
        },
        methods: {
            addBuildNumber(row) {
                this.$router.push({
                    path: "/main/build",
                    query: {
                        communityId: row.communityId,
                    }
                })

            },
            addCommunity() {
                if (this.$stringUtils.isEmpty(this.community.communityName)) {
                    this.$message({
                        message: '社区名称不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.community.communityAddress)) {
                    this.$message({
                        message: '社区地址不能为空',
                        type: 'warning'
                    });
                    return
                }
                this.$netUtils.post(this.$apis.community_add, this.community).then((response) => {
                    this.communityList = response.data;
                    this.community.communityName = "";
                    this.community.communityAddress = "";
                })
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.community_list).then((response) => {
                this.communityList = response.data;
            })
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
