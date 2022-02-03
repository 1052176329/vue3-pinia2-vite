<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";

// 定义参数名称
const userInfo = reactive({
  username: "",
  password: "",
});
const rules = {
  username: [{ required: "true", message: "账号不能为空", tigger: "blur" }],
  password: [{ required: "true", message: "密码不能为空", tigger: "blur" }],
};
const formEl = ref<HTMLFormElement | null>();
const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(formEl.value);
  console.log(formEl.value!);
  formEl.value!.validate().then((res: any) => {
    console.log(res);
  });
};
</script>
<template>
  <div class="warrpe w-full h-full flex justify-center items-center">
    <div class="w-full sm:w-96 p-2 bg-white shadow-md">
      <div class="text-center mb-2">系统登陆</div>
      <el-form
        class="p-2"
        :rules="rules"
        :model="userInfo"
        @submit="handleSubmit"
        ref="formEl"
      >
        <el-form-item prop="username">
          <el-input placeholder="账号" v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            v-model:model-value="userInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" type="primary" native-type="submit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>