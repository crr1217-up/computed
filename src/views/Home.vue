<template>
  <div class="home">
    <a-layout id="components-layout-demo-fixed-sider">
      <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item key="1">
            <a-icon type="border-inner"/>
            <!-- <span class="nav-text">kaifa</span> -->
            <router-link class="nav-text" tag="span" :to="{name:'table'}">合并表下发</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="bar-chart" />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="cloud-o" />
            <span class="nav-text">nav 5</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="appstore-o" />
            <span class="nav-text">nav 6</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="team" />
            <span class="nav-text">nav 7</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="shop" />
            <span class="nav-text">nav 8</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          <!-- Ant Design ©2018 Created by Ant UED -->
          footer
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

css.<style lang="less" scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
