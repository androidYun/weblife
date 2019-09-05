<template>
  <div>
    <div class="add_category_operation_div">
      <el-input v-model="categoryName" placeholder="请输入内容" class="input"></el-input>
      <el-button type="primary" @click="addCategory">添加</el-button>
    </div>
    <el-table
      :data="categoryList"
      border
      style="width: 100%">
      <el-table-column
        prop="categoryId"
        align="center"
        label="编号"
        class="category_operation_tr">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="单位"
        align="center"
        class="category_operation_tr">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        class="category_operation_tr">
        <template slot-scope="scope">
          <el-button @click="deleteCategory(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                categoryList: [
                    {
                        categoryId: 1,
                        categoryName: "蔬菜"
                    },
                    {
                        categoryId: 1,
                        categoryName: "蔬菜"
                    }
                ],
                categoryName: "",

            }
        },
        methods: {
            addCategory() {

            },
            deleteCategory(row) {

            }
        }
    }
</script>

<style scoped>
  .add_category_operation_div {
    display: flex;
    height: 60px;
    padding: 0px 16px 0px 16px;
    align-items: center;
  }

  .add_category_operation_div .input {
    width: 30%;
    margin-right: 20px;
  }

  .category_operation_tr {
    width: 33.33%;
  }
</style>
