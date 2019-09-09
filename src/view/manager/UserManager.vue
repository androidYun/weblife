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
        label="用户编号"
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
        name: "UserManager"
    }
</script>

<style scoped>

</style>
