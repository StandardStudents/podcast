<template>
  <div>
    <top/>
    <h1>About Us</h1>
    <p>We are two highschool friends who are making a podcast...</p>
  </div>
</template>

<script>
import Top from '@/components/Top'

export default {
  components: {
    'top': Top
  }
}
</script>

<style media="screen">
  h1 {
    padding-left: 30px;
    padding-right: 30px;
  }
  p {
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
