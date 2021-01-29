<template>
  <div>
    <span>测试</span>
    <span @click="doClick">香蕉1</span>
    <a href="javascript:0" ref="hrefs">
      这个链接点击之后不会做任何事情，如果去掉 void()，
      点击之后整个页面会被替换成一个字符 0。
    </a>
  </div>
</template>

<script>
// const path = require("path");

export default {
  name: "banana321",
  created() {
    // console.log(path.resolve("package.json"), "resolve");
    // console.log(path.basename("package.json"), "basename");
    // console.log(path.dirname("package.json"), "dirname");
    // console.log(path.extname("package.json"), "extname");
    // console.log(path.join("/", "package.json"), "join");
    // console.log(path.basename("package.json", ".json"), ".json");
    // console.log(path.isAbsolute("/package.json"), "isAbsolute");
    // console.log(path.isAbsolute("package.json"), "isAbsolute");
    // console.log(path.parse("/app.js"), "parse");
  },
  mounted() {
    this.doFine();
    this.doClick();
  },
  methods: {
    doClick() {
      var Counter = function () {
        var privateCounter = 0;
        function changeBy(val) {
          privateCounter += val;
        }
        return {
          increment: function () {
            changeBy(1);
          },
          decrement: function () {
            changeBy(-1);
          },
          value: function () {
            return privateCounter;
          },
        };
      };
      let make1 = Counter();
      let make2 = Counter();

      make1.increment();
      make2.increment();
      console.log(make1.value()); /* logs 2 */
      make2.increment();
      console.log(make2.value()); /* logs 1 */
    },
    doFine() {
      let obj = {
        name: 1,
      };
      var _this = this;
      Object.defineProperty(obj, "name", {
        get() {
          return this._name;
        },
        set(newValue) {
          this._name = newValue;
          _this.$refs.hrefs.innerHTML = newValue;
        },
        enumerable: true,
        configurable: true,
      });
      obj._name = 213;
      setTimeout(() => {
        obj._name = 222;
      }, 1000);
    },
  },
};
</script>

<style scoped>
div {
  border-spacing: 0;
}
</style>
