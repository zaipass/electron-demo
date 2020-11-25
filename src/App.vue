<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-html="compiledMarkdown"></div>
    <textarea name="content" id="editorcontent" cols="20" rows="30" :value="content" @input="update"></textarea> -->
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import marked from 'marked'
import debounce from 'lodash/debounce'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      content: '# test'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content, { sanitize: true })
    }
  },
  methods: {
    update: debounce(function (e) {
      this.content = e.target.value
    }, 1000)
  },
}
</script>
