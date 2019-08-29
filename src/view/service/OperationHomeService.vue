<template>
  <div>
    <el-row :gutter="20" class="home_service_el-row">
      <el-col :span="8">
        <div class="home_service_item">
          <span class="title">服务内容</span>
          <el-input class="input" v-model="homeServiceModel.serviceContent" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="home_service_item">
          <span class="title">服务公司</span>
          <el-input class="input" v-model="homeServiceModel.serviceCompany" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="home_service_amount">
          <div class="amount">
            <span class="title">服务费</span>
            <el-input class="input" v-model="homeServiceModel.serviceAmount" placeholder="请输入服务金额"></el-input>
          </div>
          <div class="unit">
            <span class="title">物品单位</span>
            <el-select v-model="homeServiceModel.unit" placeholder="请选择">
              <el-option
                v-for="item in goodUnitList"
                :key="item.unitId"
                :label="item.unitName"
                :value="item.unitName">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="home_service_el-row">
      <el-col :span="8">
        <div class="home_service_item">
          <span class="title">人员姓名</span>
          <el-input class="input" v-model="homeServiceModel.workName" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="home_service_item">
          <span class="title">工作地址</span>
          <el-input class="input" v-model="homeServiceModel.workAddress" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="home_service_item">
          <span class="title">服务电话</span>
          <el-input class="input" v-model="homeServiceModel.workPhone" placeholder="请输入服务电话"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="home_service_el-row">
      <el-col :span="8">
        <el-button type="primary" size="medium" @click="submitHomeService">{{methodName}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                homeServiceModel: {
                    serviceContent: "",
                    workName: "",
                    workAddress: "",
                    workPhone: "",
                    serviceAmount: 0.0,
                    serviceCompany: "",
                    unit: "",
                },
                goodUnitList: [],
                methodName: "提交"
            }
        },
        methods: {
            submitHomeService() {
                let type = this.$route.query.type;
                if (type === 0) {
                    this.$netUtils.post(this.$apis.home_service_add, this.homeServiceModel).then((response) => {
                        this.$router.back()
                    }).catch((error) => {

                    })
                }else{
                    this.$netUtils.post(this.$apis.home_service_update, this.homeServiceModel).then((response) => {
                        this.$router.back()
                    }).catch((error) => {

                    })
                }
            }
        },
        mounted() {
            this.$netUtils.get(this.$apis.unit_list).then((response) => {
                this.goodUnitList = response.data;
            });
            let type = this.$route.query.type;
            let homeServiceId = this.$route.query.homeServiceId;
            if (type === 1
            ) {
                this.methodName = "更新";
                this.$netUtils.get(this.$apis.home_service_detail + "/" + homeServiceId).then((response) => {
                    this.homeServiceModel = response.data;
                });
            }
        }
    }
</script>

<style>
  .home_service_el-row {
    margin-top: 30px;
  }

  .home_service_el-row .home_service_item {
    display: flex;
  }

  .home_service_el-row .home_service_amount {
    display: flex;
  }

  .home_service_el-row .home_service_amount .amount {
    width: 60%;
    display: flex;
  }

  .home_service_el-row .home_service_amount .input {
    width: 60%;
  }

  .home_service_el-row .home_service_amount .title {
    text-align: center;
    height: 40px;
    color: #333333;
    line-height: 40px;
    min-width: 80px;
  }

  .home_service_el-row .home_service_amount .unit {
    width: 40%;
    display: flex;
  }

  .home_service_item .title {
    text-align: center;
    height: 40px;
    color: #333333;
    line-height: 40px;
    min-width: 80px;
  }

  .home_service_item .input {
    margin-left: 20px;
    width: 60%;
  }
</style>
