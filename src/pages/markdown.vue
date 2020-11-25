<template>
  <!-- <v-card id="markdown-id"> -->
  <v-card>
    <button>{{ countNice }} - {{ countAdd }}</button>
  </v-card>
</template>

<script>
import Editor from '@toast-ui/editor' // tui-editor存在问题
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { mapState } from 'vuex'

export default {
  name: 'markdown',
  components: {
  },
  data() {
    return {
      localCount: 1,
      defaultOptions: {
        minHeight: '200px',
        previewStyle: 'vertical',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: false,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      }
    }
  },
  computed: {
    countNice () {
      return this.$store.state.count
    },
    ...mapState({
      countAdd: function (state) {
        // 此方法可以使用 this 对象
        this.localCount = state.count
        return this.localCount
      },
      // count: state => state.count,
    })
  },
  mounted () {
    console.log('---L59---', this.count, this.countAdd, this.$store.getters.clickGetter(3))
    // this.initEditor()
    this.init()
  },
  methods: {
    init: function () {
      console.log('===70==', this)
    },
    initEditor () {
      /**
       * markdown编辑器
       */
      const instance = new Editor({
        el: document.getElementById('markdown-id'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '100vh',
      })
      instance.getHtml()
    },
  },
}
</script>

<style scoped>
  #markdown-id {
    width: 100%;
  }
</style>
