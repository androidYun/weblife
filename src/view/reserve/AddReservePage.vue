<template>
  <div>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <div class="item">
          <span class="title">物品名称</span>
          <el-input class="input" v-model="reserveGood.productName" placeholder="请输入内容"></el-input>
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
          <el-input class="input" type="textarea" maxlength="200" v-model="reserveGood.productDesc"
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
          <el-select class="input" v-model="defaultDeliveryValue" @change="selectDeliveryType" placeholder="请选择">
            <el-option
              v-for="item in deliveryOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">商品分类</span>
          <el-select class="input" v-model="reserveGood.categoryName" @change="selectProductCategory" placeholder="请选择">
            <el-option
              v-for="item in categoryList"
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
          <el-input class="input" type="number" v-model="reserveGood.productPrice" placeholder="请输入内容"></el-input>
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
            v-model="reserveGood.productFinishTime"
            type="datetime"
            value-format="yyyy-MM-dd hh:mm:ss"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <span class="title">派送时间</span>
          <el-date-picker
            value-format="yyyy-MM-dd hh:mm:ss"
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
        ref="upload"
        v-bind:action="updateImageUrl"
        :on-preview="handlePreview"
        :auto-upload="false"
        :on-remove="handleRemove"
        :on-error="updateFail"
        :on-success="updateSuccess"
        :file-list="filterFileList"
        name="uploadFile"
        list-type="picture">
        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="updateImage">上传到服务器
        </el-button>
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
                    imageUrl: "",
                    productName: "",
                    categoryId: -1,
                    categoryName: "",
                    maxCount: 0,
                    productDesc: "",
                    productPrice: 0,
                    unit: "",
                    marketPrice: 0,
                    deliveryType: -1,
                    deliveryMoney: 0.0,
                    productFinishTime: "",
                    deliveryTime: "",
                    pickAddress: "",
                    publishPhone: "",
                    merchantId: this.$sessionUtils.getMerchant()
                },
                filterFileList: [],
                goodUnitList: [],
                updateImageUrl: this.$apis.image_update_url,
                defaultDeliveryValue: "派送和自取都支持",
                deliveryOptions: [{
                    value: '0',
                    label: '派送和自取都支持'
                }, {
                    value: '1',
                    label: '自取'
                }, {
                    value: '2',
                    label: '派送'
                }],
                categoryList: []
            }
        },
        methods: {
            selectDeliveryType(key) {
                this.reserveGood.deliveryType = this.deliveryOptions[key].value
            },
            selectProductCategory(key) {
                this.reserveGood.categoryId = this.categoryList[key].value
                this.reserveGood.categoryName = this.categoryList[key].label
            },
            updateImage() {
                this.$refs.upload.submit();
            },
            submitReserveProtect: function () {
                if (this.$stringUtils.isEmpty(this.reserveGood.productName)) {
                    this.$message({
                        message: '商品名字不能为空',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.productDesc)) {
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
                if (this.reserveGood.deliveryType < 0) {
                    this.$message({
                        message: '请送货类型',
                        type: 'warning'
                    });
                    return
                }
                if (this.reserveGood.categoryId < 0) {
                    this.$message({
                        message: '请选择商品分类',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.productFinishTime)) {
                    this.$message({
                        message: '请选择结束时间',
                        type: 'warning'
                    });
                    return
                }
                if (this.$stringUtils.isEmpty(this.reserveGood.productFinishTime)) {
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
                if (this.reserveGood.productPrice <= 0) {
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
                if (this.$stringUtils.isEmpty(this.reserveGood.imageUrl)) {
                    this.$message({
                        message: '请选择图片',
                        type: 'warning'
                    });
                    return
                }
                let type = this.$route.query.type;//0是添加 1是编辑
                if (type === 0) {
                    this.$netUtils.post(this.$apis.reserve_add, this.reserveGood)
                        .then((response) => {
                            this.$router.back()
                        })
                } else {
                    this.$netUtils.post(this.$apis.reserve_update, this.reserveGood)
                        .then((response) => {
                            this.$router.back()
                        })
                }

            },
            loadCategoryList() {
                this.$netUtils.get(this.$apis.product_category_list)
                    .then((response) => {
                        if (response.data !== undefined) {
                            let categoryList = response.data.map((item) => {
                                return {
                                    value: item.categoryId,
                                    label: item.categoryName
                                }
                            });
                            this.categoryList = categoryList;
                        }
                    })
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            updateSuccess(response, file, fileList) {
                this.reserveGood.imageUrl = response.data;
            },

            updateFail(err, file, fileList) {
                console.log("失败" + fileList.length);
            },
            handlePreview(file) {
                console.log("预览" + file.url + "  " + this.filterFileList.length);
            }

        },
        mounted() {
            this.$netUtils.get(this.$apis.unit_list).then((response) => {
                this.goodUnitList = response.data;
            });
            let type = this.$route.query.type;
            let reserveId = this.$route.query.reserveId;
            if (type === 1) {//0 添加 1是编辑
                this.$netUtils.get(this.$apis.reserve_detail + reserveId).then((response) => {
                    this.reserveGood = response.data;
                    this.filterFileList = [this.reserveGood.imageUrl]
                });
            }
            this.loadCategoryList();
        },
        props: {
            reserveId: {
                type: Number,
                default: 0
            },
            type: {
                type: Number, //0是添加 1是编辑
                default: 0
            }
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
