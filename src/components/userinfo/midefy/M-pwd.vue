<template>
  <div class="m-pwd">
    <div class="form">
      <div class="outer">
        <input type="password" name="oldPwd" v-model="oldPwd" required />
        <div class="input_bom"></div>
        <label>旧密码</label>
      </div>
      <div class="outer">
        <input type="password" name="newPwd" v-model="newPwd" required />
        <div class="input_bom"></div>
        <label>新密码</label>
      </div>
      <div class="item">
        <button @click="setPwd">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { setPwdAPI } from "@/api";
export default {
  inject: ["reload"],
  data() {
    return {
      oldPwd: "",
      newPwd: ""
    };
  },
  methods: {
    async setPwd() {
      const { data: res } = await setPwdAPI(
        localStorage.getItem("token"),
        this.oldPwd,
        this.newPwd
      );
      console.log(res);
      if (res.status == 0) {
        this.reload()
        this.$notify({
          message: "修改成功",
        });
      }
    }
  }
};
</script>

<style lang='less' scoped>
.m-pwd {
  .form {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .outer {
      position: relative;
      width: 100%;
      height: 50px;
      input:focus ~ label,
      input:valid ~ label {
        transform: translateY(-25px);
        font-size: 15px;
        color: #2c6fdb;
      }
      input {
        width: 100%;
        height: 100%;
        padding: 0;
        outline: none;
        border: none;
        border-bottom: 2px solid #ddd;
      }

      label {
        position: absolute;
        bottom: 10px;
        left: 0;
        pointer-events: none;
        font-size: 14px;
        transition: all 0.3s ease;
      }
      .input_bom {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #2c6fdb;
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
      input:focus ~ .input_bom,
      input:valid ~ .input_bom {
        transform: scaleX(1);
      }
    }
    .item {
      button {
        width: 600px;
        height: 50px;
        background-color: #0984e3;
        outline: none;
        border: none;
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>