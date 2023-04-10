<template>
  <ul>
    <li v-for="animal in myAnimals">{{ animal }}</li>
    <!-- ตัวแปร dummy จะใช้ได้แค่ใน tag เท่านั้น-->
  </ul>
</template>

<script>
export default {
  name: "MyCom",
  data: function () {
    return {
      myAnimals: ["dog", "cat", "bat", "rat"],
    };
  },
  props: ["animals"] // props สามารถใช้เป็น array ได้เลย 
  // หรือสามารถกำหนดเป็น type ได้ 
};
</script>
<!-- scoped : style ที่เขียนใน component นี้จะไม่ไปกระทบกับ component อื่น-->
<style scoped>
li {
  display: block;
  padding: 16px auto;
  text-align: center;
  font-size: 16px;
  color: red;
  font-weight: bold;
}
</style>
