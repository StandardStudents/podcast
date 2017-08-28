<template>
  <div>
    <a href="https://github.com/StandardStudents/" target="_blank">
      <img id="logo" src="../assets/logo.png" alt="The Standard Students Logo">
    </a>
    <top/>
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
#logo {
  display: block;
  margin: auto;
  width: 350px;
  height: 350px;
}
</style>
