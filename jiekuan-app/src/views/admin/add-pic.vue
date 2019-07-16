<template>
  <div class="admin_p_user_page">
    <div class="title">图片列表</div>
    <ul class="user_list">
      <p class="pic_title">首页图片</p>
      <el-table
        :data="homePic"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          >
        </el-table-column>
       <el-table-column
          label="图片"
          >
          <template slot-scope="scope">
            <el-popover
              placement="right"
              trigger="hover">
              <img :src="'http://loan.com'+ scope.row.img"/>
              <img slot="reference" :src="'http://loan.com'+ scope.row.img" alt="" style="max-height:150px;"/>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <div class="handle_btn">
              <el-button size="mini" type="primary">{{scope.row.img.length > 0 ? '修改' : '添加'}}</el-button>
              <el-upload
                class="avatar-uploader"
                :action="`/api/admin/file/edit?adminToken=${adminToken}&type=1`"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <p class="pic_title">支付二维码</p>
      <el-table
        :data="payPic"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id">
        </el-table-column>
        <el-table-column
          label="图片">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              trigger="hover">
              <img :src="'http://loan.com'+ scope.row.img"/>
              <img slot="reference" :src="'http://loan.com'+ scope.row.img" alt="" style="max-height:150px;"/>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <div class="handle_btn">
              <el-button size="mini" type="primary">{{scope.row.img.length > 0 ? '修改' : '添加'}}</el-button>
              <el-upload
                class="avatar-uploader"
                :action="`/api/admin/file/edit?adminToken=${adminToken}&type=3`"
                :show-file-list="false"
                :on-success="handleAvatarSuccess3"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <p class="pic_title">客服号码</p>
      <el-table
        :data="qqPic"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id">
        </el-table-column>
        <el-table-column
          label="客服号码">
          <template slot-scope="scope">
            {{scope.row.img}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="dialogVisible=!dialogVisible">{{scope.row.img.length > 0 ? '修改' : '添加'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ul>
    <el-dialog
      title="编辑客服号码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="客服号码" >
          <el-input v-model="qq" autocomplete="off" placeholder="请输入客服号码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancleAdd()">取 消</el-button>
        <el-button size="mini" type="primary" @click="addQq">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { showToastOnly } from '@/libs/utils';
import {Table, TableColumn, Button, Upload, Popover, Dialog, Form, FormItem, Input} from 'element-ui';
export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'el-upload': Upload,
    'el-popover': Popover,
    'el-dialog': Dialog,
    'el-form': Form,
    'el-input': Input,
    'el-form-item': FormItem
  },
  data() {
    return {
      imageUrl: '',
      homePic: [],
      payPic: [],
      qqPic: [],
      qq: '',
      adminToken: this.$Cookies.get('adminToken'),
      dialogVisible: false
    }
  },
  created() {
    // 1首页图片  3支付二维码 4 qq号
    this.getData(1);
    this.getData(3);
    this.getData(4);
  },
  methods: {
    handleClose(){
      this.dialogVisible = false;
    },
    cancleAdd() {
      this.dialogVisible = false;
      this.qq = '';
    },
    addPic(type) {
      this.$service.post(`/api/admin/file/edit`, {
        adminToken: this.adminToken,
        type: type
      }, true).then((res) => {
        if (res && res.errNo === 0) {
          this.getData(type);
        } else {
          showToastOnly({
            that: this,
            msg: '上传失败',
            time: 2000
          });
        }
      });
    },
    addQq(){
      this.$service.post(`/admin/file/addqq`, {
        adminToken: this.adminToken,
        type: 4,
        qq: this.qq
      }, true).then((res) => {
        if (res && res.code === 0) {
          this.dialogVisible = false;
          this.getData(4);
        } else {
          showToastOnly({
            that: this,
            msg: '上传失败',
            time: 2000
          });
        }
      });
    },
    handleAvatarSuccess() {
      this.getData(1);
    },
    handleAvatarSuccess3() {
      this.getData(3);
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload() {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },
    getData(type) {
      this.$service.post('/admin/file', {
        adminToken: this.$Cookies.get('adminToken'),
        type: type
      }, true).then(res => {
        if(type === 1) {
          this.homePic = res.data.img;
        } else if(type === 3) {
          this.payPic = res.data.img
        } else if(type === 4) {
          this.qqPic = res.data.img
        }
        
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
  .handle_btn{
    position: absolute;
    .avatar-uploader{
      position: absolute;
      top:0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
      color:transparent;
      overflow: hidden;
      /deep/ .el-upload{
        width: 100%;
        height: 100%;
      }
      /deep/ .el-upload__input{
        display: block;
        width: 100%;
        height: 100%;
        background: transparent;
        position: absolute;
        top:0;
        left: 0;
        visibility: hidden;
      }
      input{
        display: block;
      }
    }
  }
  .pic_title{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
  .user_list{
    padding:10px 0px;
  }
}
</style>


