<template>
  <div>
    <router-link :to="{ name: 'Lander' }">
      <img id="logo" src="../assets/logo.png" alt="The Standard Students Logo">
    </router-link>
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
