

<template>
  <el-container class="wrapper">
    <el-aside :width="asideWidth" class="left-aside transition-all">
      <div class="logo">
        <div class="text">后台模板</div>
      </div>
      <div class="menus">
        <el-menu
          default-active="1"
          :collapse="coller"
          class="el-menu-vertical-demo"
          @select="selectMenuChange"
        >
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <span>控制面板</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><user-filled /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="2-1">
              <span>控制面板</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </el-aside>
    <el-container class="right-wrapper">
      <el-header class="right-header">
        <div
          @click="asideWidthChange"
          v-if="asideWidth === '200px'"
          class="header-left"
        >
          hello
          <!-- <span class="iconify" data-icon="akar-icons:search"></span> -->
        </div>
        <div @click="asideWidthChange" v-else class="header-left">
          hello2
          <!-- <span class="iconify" data-icon="akar-icons:search"></span> -->
        </div>
        <div class="header-right">
          <div class="avatar cursor-pointer">
            <el-dropdown trigger="click" @command="handleClick">
              <el-avatar
                :size="50"
                :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
              ></el-avatar>
              <template #dropdown>
                <el-dropdown-menu >
                  <el-dropdown-item command="edit-pass">修改密码 </el-dropdown-item>
                  <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main class="right-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup="setup">
import { computed, ref } from "vue";
import {
  Location,
  Setting,
  Document,
  User as UserFilled,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import router from "../router";
// useRouter 相当于$router
const route = useRouter();

const asideWidth = ref("200px");

console.log(asideWidth.value);
// 首页helle 收缩点击
const asideWidthChange = () => {
  asideWidth.value = asideWidth.value === "200px" ? "60px" : "200px";
};
// 点击hello，菜单回收
const coller = computed(() => {
  return asideWidth.value !== "200px";
});
// 点击菜单判断跳转
const selectMenuChange = (index: any) => {
  console.log(index)
  switch (index) {
    case "1":
      console.log("1", index);
      route.push({ name: "Dashboard" });
      break;
    case '2-1':
      route.push({name: 'UserList'})
  }
};
// 点击下拉
const handleClick = (index: any)=> {
  console.log(index)
  switch(index){
    case 'edit-pass':
      console.log('修改密码')
      break;
    case 'loginOut':
      console.log('退出登录')
      router.push({path: '/login'})
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.left-aside {
  height: 100%;
  background: #999;
  .logo {
    @apply text-center h-10 select-none;
    .text {
      @apply text-center text-lg font-bold h-10 py-2 px-4 bg-black text-white;
    }
  }
  .menus {
    height: calc(100% - 2.5rem);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.right-wrapper {
  @apply flex-1;
}
.right-header {
  @apply bg-indigo-200 flex items-center justify-between;
}
.right-main {
  background: #fff;
}
.header-wrapper {
}
</style>