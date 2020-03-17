<template>
  <div>
    <markdown-it-vue class="md-body" :content="content"/>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import Introduction from './Introduction'
export default {
  name: "IntroductionPage",
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: Introduction,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>