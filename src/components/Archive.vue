<template>
  <div>
    <top dim="75px"/>
    <div id="archive">
      <a-player id="player" theme="#ff2b2b" :music="[
        {
          title: 'Week 0',
          author: 'Pranoy Dutta and Ben Wang',
          url: 'http://my.mixtape.moe/mxqhfu.mp3',
          pic: 'https://raw.githubusercontent.com/StandardStudents/media/master/logo.png'
        },
        {
          title: 'Week 1',
          author: 'Pranoy Dutta and Ben Wang',
          url: 'https://a.safe.moe/J0Mxz.mp3',
          pic: 'https://raw.githubusercontent.com/StandardStudents/media/master/logo.png'
        }
      ]"></a-player>
    </div>
  </div>
</template>

<script>
import VueAPlayer from 'vue-aplayer'
import Top from './Top'

export default {
  components: {
    'a-player': VueAPlayer,
    'top': Top
  }
}
</script>

<style scoped>
#archive {
  padding: 50px;
}
@media (min-width:480px)  {
  #archive {
    padding: 0px;
  }
}

#player {
  border: 1px solid black;
}
</style>
