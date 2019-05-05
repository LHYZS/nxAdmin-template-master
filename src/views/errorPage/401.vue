<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
      <el-table-column prop="name" label="姓名" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="sex" label="性别" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="age" label="年龄" :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            'name': '赵静',
            'sex': '女',
            'age': '20'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
