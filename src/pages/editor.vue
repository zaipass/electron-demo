<template>
  <v-card class="rich-editor">
    <editor
      apiKey="zow66lgfvo5rf4ng0f7yn84sf5e1xijr9iuhu9htlp7ih006"
      :init="initEditor"
      output-format="text"
    ></editor>
    <button @click="addNum">ADD TEST</button>
  </v-card>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'RichEditor',
  components: {
    Editor,
  },
  computed: {
    ...mapState({
      count: state => state.count,
    })
  },
  data () {
    return {
      initEditor: {
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
      },
    }
  },
  methods: {
    ...mapMutations({
      add: 'add'
    }),
    ...mapActions({
      addAction: 'addAction'
    }),
    addNum () {
      this.add(1)
      // this.addAction(1)
    },
  },
}
</script>
