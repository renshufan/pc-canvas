<template>
  <div>
    <canvas id="tutorial" width="150" height="150"></canvas>
    <div>
      <img :src="src" alt="" width="150" height="150" />
    </div>
    <a :href="src" class="src" download="下载">下载</a>
  </div>
</template>

<script>
export default {
  name: "carrot",
  data() {
    return {
      src: null,
    };
  },
  mounted() {
    let canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      var img = new Image();
      img.onload = () => {
        // for (var i = 0; i < 3; i++) {
        //   for (var j = 0; j < 3; j++) {
        //     ctx.drawImage(img, i * 50, j * 50, 50, 50);
        //   }
        // }
        // ctx.drawImage(img, 0, 0, 150, 150);

        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 150, 150);
        ctx.drawImage(img, 0, 0, 150, 150);
        ctx.fillStyle = "rgba(0,0,1,0.3)";
        ctx.font = "12px serif ";
        ctx.fillText("任淑凡是最帅的", 30, 50);
        this.src = canvas.toDataURL("image/jpeg", 0.31);
        console.log(canvas.toDataURL("image/jpeg", 0.31));
      };
      img.src = require("@/assets/logo.png");

      // drawing code here
    } else {
      // canvas-unsupported code here
    }
  },
  methods: {
    doClick() {
      this.$router.push({ name: "banana" });
    },
  },
};
</script>

<style scoped>
#tutorial {
  border: 1px solid rgb(198, 199, 198);
}
</style>