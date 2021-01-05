<template>
  <div>
    <span @click="doClick">香蕉</span>
    <a href="javascript:0">
      这个链接点击之后不会做任何事情，如果去掉 void()，
      点击之后整个页面会被替换成一个字符 0。
    </a>
  </div>
</template>

<script>
const path = require("path");

export default {
  name: "banana",
  created() {
    console.log(path.resolve("package.json"), "resolve");
    console.log(path.basename("package.json"), "basename");
    console.log(path.dirname("package.json"), "dirname");
    console.log(path.extname("package.json"), "extname");
    console.log(path.join("/", "package.json"), "join");
    console.log(path.basename("package.json", ".json"), ".json");
    console.log(path.isAbsolute("/package.json"), "isAbsolute");
    console.log(path.isAbsolute("package.json"), "isAbsolute");
    // console.log(path.parse("/app.js"), "parse");
  },
  mounted() {},
  methods: {
    doClick() {},
    do() {},
  },
};
</script>

<style scoped>
div{
  border-spacing: 0;
}
</style>