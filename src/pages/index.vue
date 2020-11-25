<template>
  <v-card
    class="index-box"
  >
    <span>{{ indexTitle }}</span>
    <!-- <toolbar :bars="toolbars" :bar="bar" /> -->
    <markdown></markdown>
    <rich-editor></rich-editor>
  </v-card>
</template>

<script>
import markdown from '@/pages/markdown'
import RichEditor from '@/pages/editor'

export default {
  name: 'index',
  components: {
    markdown,
    'rich-editor': RichEditor,
  },
  data () {
    return {
      indexTitle: 'ooo',
      toolbars: ['1', '2'],
      bar: 'sad',
    }
  },
}
</script>

<style >
  .index-box {
    position: relative;
    width: 100%;
  }
</style>
