<template>
  <div class="admin_p_user_page">
    <div class="title">问题列表</div>
    <ul class="user_list">
      <el-table
        :data="questionList"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="question"
          label="问题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="answer"
          label="答案">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="添加时间">
        </el-table-column>
        <el-table-column
          prop="update_time"
          label="更新时间">
        </el-table-column>
        <el-table-column
          label="申请订单">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="modifyQuestion(scope.$index, scope.row.id)">修改</el-button>
            <el-button size="mini" type="danger" @click="deleteQuestion(scope.$index, scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ul>
    <el-dialog
      :title="type==='add' ? '添加问题':'修改问题'"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="formData" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="问题">
          <el-input type="textarea" v-model="formData.question" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案" >
          <el-input v-model="formData.answer" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="getData('cancle')">取 消</el-button>
        <el-button size="mini" type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除"
      :visible.sync="deleteVisible"
      width="30%"
      >
      <span>确定要删除该问题吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="deleteVisible = false">取 消</el-button>
        <el-button size="mini" type="danger" @click="confirmDelete">确 定</el-button>
      </span>
    </el-dialog>
    <div class="footer">
      <el-button class="add_btn" type="info" @click="addQuestion">添加问题</el-button>
    </div>
  </div>
</template>
<script>
import {Table, TableColumn, Button, Dialog, Form, FormItem, Input} from 'element-ui';
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'el-dialog': Dialog,
    'el-form': Form,
    'el-input': Input,
    'el-form-item': FormItem
  },
  data() {
    return {
      question:[{
        id: '',
        question: 'ahhahah',
        answer: '1111'
      }],
      questionList: [],
      questionId: '',
      questionIndex: '',
      dialogVisible: false,
      formData: {},
      deleteVisible: false,
      type: ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    getData(type) {
      if (type === 'cancle') {
        this.dialogVisible = false;
      }
      this.$service.get('/admin/question_modify', {
        adminToken: this.$Cookies.get('adminToken')
      }, true).then(res => {
        this.questionList = res.data.questionList
      }).catch(() => {
      });
    },
    addQuestion() {
      this.dialogVisible = !this.dialogVisible;
      this.type = 'add';
    },
    confirmDelete() {
      this.formData = {};
      this.submitForm('delete');
      
    },
    deleteQuestion(index, id) {
      this.type = 'delete';
      this.questionId = id;
      this.questionIndex = index;
      this.deleteVisible = !this.deleteVisible;
    },
    modifyQuestion(index, id) {
      this.questionId = id;
      this.questionIndex = index;
      this.type = 'edit';
      this.dialogVisible = !this.dialogVisible;
      this.formData = this.questionList[index];
    },
    submitForm() {
       let list = [];
      if(this.type === 'add') {
        list = this.questionList;
        list = list.concat(this.formData);
      } else {
        this.questionList[this.questionIndex] = this.formData;
        list = this.questionList
      }
      this.$service.post('/admin/question_modify/modify', {
        adminToken: this.$Cookies.get('adminToken'),
        question: list
      }, true).then(() => {
        if(this.type === 'delete') {
          this.deleteVisible = !this.deleteVisible;
        } else {
          this.dialogVisible = !this.dialogVisible;
        }
        this.formData = {};
        this.getData();
      }).catch(() => {
      });
    }
  }
}
</script>
<style lang="less" scoped>
.admin_p_user_page{
  width: 100%;
  height: 100%;
  padding:20px;
  box-sizing: border-box;
  text-align: left;
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
  .user_list{
    padding:10px 0px;
  }
  .footer{
    text-align: center;
    margin-top: 40px;
    .add_btn{
      width: 400px;
      margin:0 auto;
    }
  }
}
</style>


