<template>
  <div>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <div class="item">
          <span class="title">物品名称</span>
          <el-input class="input" v-model="reserveGood.goodName" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">物品数量</span>
          <el-input class="input" type="number" v-model="reserveGood.maxCount" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">物品单位</span>
          <el-select class="input" v-model="reserveGood.unit" placeholder="请选择">
            <el-option
              v-for="item in goodUnitList"
              :key="item.unitId"
              :label="item.unitName"
              :value="item.unitName">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row">
      <el-col :span="20">
        <div class="item">
          <span class="title">物品描述</span>
          <el-input class="input" type="textarea" maxlength="200" v-model="reserveGood.goodDesc"
                    placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <div class="item">
          <span class="title">地址</span>
          <el-input class="input" v-model="reserveGood.pickAddress" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">派送类型</span>
          <el-select class="input" v-model="defaultDeliveryValue" @change="test" placeholder="请选择">
            <el-option
              v-for="item in deliveryOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row">
      <el-col :span="6">
        <div class="item">
          <span class="title">商品价格</span>
          <el-input class="input" type="number" v-model="reserveGood.goodPrice" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="item">
          <span class="title">市场价格</span>
          <el-input class="input" input="number" v-model="reserveGood.marketPrice" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="item">
          <span class="title">发布人手机号</span>
          <el-input class="input" type="number" v-model="reserveGood.publishPhone" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <div class="item">
          <span class="title">结束时间</span>
          <el-date-picker
            v-model="reserveGood.reserveFinishTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">派送时间</span>
          <el-date-picker
            v-model="reserveGood.deliveryTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>


    <div class="submit_update_image">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="filterFileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button type="primary" @click="submitReserveProtect">提交数据</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                reserveGood: {
                    imageUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2413963443,3953447049&fm=26&gp=0.jpg",
                    goodName: "",
                    maxCount: 0,
                    goodDesc: "",
                    goodPrice: 0,
                    unit: "",
                    marketPrice: 0,
                    deliveryType: 0,
                    deliveryMoney: 0.0,
                    reserveFinishTime: "",
                    deliveryTime: "",
                    pickAddress: "",
                    publishPhone: ""
                },
                filterFileList: [],
                goodUnitList: [],
                defaultDeliveryValue:"派送和自取都支持",
                deliveryOptions: [{
                    value: '0',
                    label: '派送和自取都支持'
                }, {
                    value: '1',
                    label: '自取'
                }, {
                    value: '2',
                    label: '派送'
                }]
            }
        },
        methods: {
            test(key){
              this.deliveryType=this.deliveryOptions[key].value
            },
            submitReserveProtect: function () {
                console.log(this.reserveGood.goodName);
                if (this.$stringUtils.isEmpty(this.reserveGood.goodName)) {
                    this.$message({
                        message: '商品名字不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.goodDesc)) {
                    this.$message({
                        message: '商品描述不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.reserveGood.maxCount <= 0) {
                    this.$message({
                        message: '请添写物品数量',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.publishPhone)) {
                    this.$message({
                        message: '手机号不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.publishPhone)) {
                    this.$message({
                        message: '手机号不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.reserveFinishTime)) {
                    this.$message({
                        message: '请选择结束时间',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.deliveryTime)) {
                    this.$message({
                        message: '请选择派送时间',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.unit)) {
                    this.$message({
                        message: '请选择单位',
                        type: 'warning'
                    });
                    return
                }
                if (this.reserveGood.goodPrice <= 0) {
                    this.$message({
                        message: '请填写价格',
                        type: 'warning'
                    });
                    return
                }
                if (this.reserveGood.marketPrice <= 0) {
                    this.$message({
                        message: '请添加市场价格',
                        type: 'warning'
                    });
                    return
                }
                if (this.reserveGood.imageUrl.length <= 0) {
                    this.$message({
                        message: '请选择图片',
                        type: 'warning'
                    });
                    return
                }
                console.log("dd"+this.reserveGood.deliveryType);
                this.$netUtils.post(this.$apis.reserve_add, this.reserveGood)
                    .then((response) => {
                        this.$router.back()
                    })
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }

        },
        mounted() {
            this.$netUtils.get(this.$apis.unit_list).then((response) => {
                this.goodUnitList = response.data;
            })
        }
    }
</script>

<style>

  .el-row {
    margin-top: 30px;
  }

  .item {
    display: flex;
  }

  .item .title {
    text-align: center;
    height: 40px;
    color: #333333;
    line-height: 40px;
    min-width: 80px;
  }

  .item .input {
    margin-left: 20px;
    width: 60%;
  }

  .submit_update_image {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

</style>
