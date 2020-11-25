<template>
  <v-card
    class="toolbar-box"
    tile
  >
    <v-list rounded>
      <v-list-item-group v-model="bar" color="primary">
        <v-list-item
          v-for="(item, i) in bars"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'toolbar',
  props: {
    bars: {
      type: Array,
      default: () => {
        return ['1', '2']
      }
    },
    bar: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    }
  },
}
</script>
