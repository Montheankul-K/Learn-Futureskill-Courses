<script>
import MyCom from "./MyCom.vue"; //import component
export default {
  components: {
    MyCom, // register component
  },
  name: "HelloWorld",
  // data และ method เป็น 2 ตัวที่ใช้บ่อยมากๆ
  data() {
    return {
      msg: "Welcome to My Project.",
      subTitle: "hello world",
      age: 19,
      showTitle: true,
      link: "https://google.com",
      mySrc: "src",
      myIMG:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsea%2F&psig=AOvVaw1ud73nkVO6RStrD50HW3I0&ust=1680857500765000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiwz6PwlP4CFQAAAAAdAAAAABAE",
      myClick: click,
      myObj: {
        x: 50,
        y: 60,
        z: 70,
      },
      animals: ["dog", "cat", "bat", "rat"],
    };
  },
  methods: {
    timeAge: function () {
      return this.age * 2;
    },
    changeAge: function (e) {
      // e คือ event ที่เกิดขึ้น
      this.age = e.target.value; // value ของ event
    },
    addAge: function (e) {
      e.preventDefault();
      return this.age++;
    },
    toggleTitle: function () {
      return (this.showTitle = !this.showTitle);
    },
  },
  computed: {
    doubleAge: function () {
      return this.age * 2;
    },
  },
  watch: {
    // ถ้าจะ watch ตัวไหนจะตั้งชื่อเป็นตัวนั้น
    // จะทำงานเมื่อ age มีการเปลี่ยนแปลง แต่จะไม่ได้ทำเลยเหมือน computed
    age: function () {
      var self = this; // ประกาศ this เพราะ set timeout จะมี this ทำให้มันจะไม่รู้จัก this
      setTimeout(function () {
        self.age = 0;
      }, 2000);
    },
  },
};
</script>

<template>
  <div class="hello">
    <!--
    <h1 v-if="age > 20 ? true : false">{{ msg }}</h1>
    ถ้าเป็น true จะแสดง element
    -->
    <h1 v-if="showTitle">{{ msg }}</h1>
    <button @click="toggleTitle">Click me</button>
    <h2>{{ subTitle }}</h2>
    <h2>{{ timeAge() }}</h2>
    <h2>{{ doubleAge }}</h2>
    <!--ไม่ต้องเขียนเหมือน function เขียนแค่ชื่อได้-->
    <a :href="link"></a>
    <!-- ใช้ shorthands ของ v-bind-->
    <img v-bind:[mySrc]="myIMG" alt="" />
    <!-- v-bind แบบ dynamic attribute -->
    <!-- pass ค่าโดยใช้ {{  }} ไม่ได้ -->
    <form v-on:[myClick]="addAge" action="">
      <!-- default จะ submit ไปที่ url ใน action-->
      <!--
      <input @keyup="changeAge"/> 
      ใช้ตัวย่อของ v-on
      ถ้าจะทำ two way binding 
      <input @keyup="changeAge" :value="age"/> 
      -->
      <input v-model="age" />
      <!-- ทำ two way binding-->
      <button type="submit">Add age</button>
    </form>
    <ul>
      <li v-for="(num, key, index) in myObj">{{ key + "=" + num + index }}</li>
      <!--ถ้า default จะไม่แสดง key และ index มาด้วย-->
    </ul>
    <MyCom animals="animals"/> <!--ส่ง props เข้าไปที่ component--> 
    <!--เรียกใช้ component-->
  </div>
</template>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ีul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
