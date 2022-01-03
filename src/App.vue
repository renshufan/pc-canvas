<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // window.open('https://lz-file-service.oss-cn-hangzhou.aliyuncs.com/receiptPdf/1409758121597677569', '_self')
    // location.href = 'https://lz-file-service.oss-cn-hangzhou.aliyuncs.com/receiptPdf/1409758121597677569'
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
