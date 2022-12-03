<template>
  <el-card class="box-card">
    <div>
      <!-- 图片，用来展示用户选择的头像 -->
      <img class="the_img" v-if="!this.avatar" src alt />
      <img class="the_img" v-else :src="this.avatar" alt />
      <!-- 按钮区域 -->
      <div class="btn-box">
        <input
          type="file"
          accept="image/*"
          style="display: none"
          ref="iptRef"
          @change="upload"
        />
        <el-button type="primary" icon="el-icon-plus" @click="chooseImg">选择图片</el-button>
        <el-button
          type="success"
          icon="el-icon-upload"
          :disabled="avatar === ''"
          @click="updateFn"
        >上传头像</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { updateAvatarAPI } from "@/api";
import COS from "cos-js-sdk-v5";
// 填写自己腾讯云cos中的key和id (密钥)
const cos = new COS({
  SecretId: "AKIDo06DJSWdanuySccdktx4Y5lTBIMKJC4A", // 身份识别ID
  SecretKey: "EIE1gfUXwMmKrEZ5J2fTBtgYPIXAjEj4" // 身份秘钥
});
export default {
  inject: ["reload"],
  name: "UserAvatar",
  data() {
    return {
      avatar: ""
    };
  },
  methods: {
    // 选择图片->点击事件->让选择框出现
    chooseImg() {
      // 模拟点击行为
      this.$refs.iptRef.click();
    },
    // 在选择框中选择图片后触发的改变事件
    upload(res) {
      console.log(res.path[0].files[0]);
      let file = res.path[0].files[0];
      if (file) {
        console.log(res.file);
        // 执行上传操作
        cos.putObject(
          {
            Bucket: "image-1315468302" /* 存储桶 */,
            Region: "ap-chengdu" /* 存储桶所在地域，必须字段 */,
            Key: file.name /* 文件名 */,
            StorageClass: "STANDARD", // 上传模式, 标准模式
            Body: file // 上传文件对象
          },
          (err, data) => {
            console.log(err || data);
            // 上传成功之后
            if (data.statusCode === 200) {
              this.avatar = `https:${data.Location}`; // 返回的url地址
              console.log(`https:${data.Location}`);
            }
          }
        );
      }
    },
    async updateFn() {
      console.log(this.avatar);
        const { data: res } = await updateAvatarAPI(
            localStorage.getItem("token"),
            this.avatar
          );
          if(res.status == 0){
            this.reload()
            this.$notify({
              message:'图片更换成功',
            })
          }
    }
  }
};
</script>

<style lang="less" scoped>
.btn-box {
  margin-top: 10px;
}
.preview {
  object-fit: cover;
}
.the_img {
  width: 350px;
  height: 350px;
}
</style>