<template>
  <div>
    <markdown-it-vue class="md-body" :content="content"/>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import GameStrategy from './GameStrategy'
export default {
  name: "GameStrategyPage",
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: GameStrategy,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>