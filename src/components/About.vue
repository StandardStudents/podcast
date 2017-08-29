<template>
  <div>
    <top dim="75px"/>
    <h1>About Us</h1>
    <h2><a href="https://github.com/prydt" target="_blank">PryDt - Pranoy Dutta</a></h2>
    <p>Hey, I'm a highschooler (9th grade as of 2017) who is very interested in programming.<br>Other things I do in my free time are watch anime and playing video games!<br>I'm the one who made this website and the RSS Feed. (^^)b</p>
    <h2><a href="https://www.youtube.com/user/trlolftw" target="_blank">Wbne - Ben Wang</a></h2>
    <p>An eagle who enjoys playing video games, piano, and violin.<br>Likes: youtube, discord, ow, food, and sleep.<br>Dislikes: boring and easy classes, having to wake up early, and exercising.</p>
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

<style scoped>
h1 {
  padding-left: 30px;
}
h2 {
  padding-left: 50px;
}
p {
  padding-left: 100px;
  padding-right: 100px;
}
</style>
