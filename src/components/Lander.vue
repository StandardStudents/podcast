<template>
  <div>
    <img id="logo" src="../assets/logo.png" alt="The Standard Students Logo">
    <top></top>
  </div>
</template>

<script>
import Top from '@/components/Top'

export default {
  data () {
    return {
    }
  },
  components: {
    'top': Top
  }
}
</script>

<style>
@import "../assets/main.css";

#logo {
  display: block;
  margin: auto;
  width: 350px;
  height: 350px;
}
</style>
