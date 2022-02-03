

<template>
  <el-container class="wrapper">
    <el-aside :width="asideWidth" class="left-aside transition-all">
      <div class="logo">
        <div class="text">后台模板</div>
      </div>
      <div class="menus">
        <el-menu
        default-active="2"
        :collapse="coller"
        class="el-menu-vertical-demo"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
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
            <el-dropdown trigger="click">
               <el-avatar
              :size="50"
              :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
            ></el-avatar>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>修改密码 </el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
           
          </div>
        </div>
      </el-header>
      <el-main class="right-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup="setup">
import { computed, ref } from "vue";
import { Location, Setting, Document} from '@element-plus/icons-vue'
const asideWidth = ref("200px");
console.log(asideWidth.value);
// 首页helle 收缩点击
const asideWidthChange = () => {
  asideWidth.value = asideWidth.value === "200px" ? "60px" : "200px";
};
// 点击hello，菜单回收
const coller = computed(()=>{
  return asideWidth.value !== '200px'
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.left-aside {
  height: 100%;
  background: #999;
  .logo{
    @apply text-center h-10 select-none;
    .text{
      @apply text-center text-lg font-bold h-10 py-2 px-4 bg-black text-white;
    }
  }
  .menus{
    height: calc(100% - 2.5rem);
    overflow-y: auto;
    overflow-x: hidden
  }
}
.right-wrapper {
  @apply flex-1;
}
.right-header {
  @apply bg-indigo-200 flex items-center justify-between;
}
.right-main {
  background: green;
}
.header-wrapper {
}
</style>