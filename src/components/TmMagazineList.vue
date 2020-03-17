<template>
  <div>
    <v-container fluid>
      <v-row align-content="center" justify="start">
        <v-col v-for="(item, i) in items" :key="i" xs="12" sm="6" md="3">
          <v-card class="mx-auto" max-width="300px" min-width="200px">
            <v-img :src="item.image" height="300px"></v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-actions>
              <v-btn
                text
                v-clipboard:copy="item.href"
                v-clipboard:success="copy"
                v-clipboard:error="onError"
              >分享</v-btn>

              <v-btn color="blue darken-2" text :href="item.href">阅读</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar">
        {{snackbarMsg}}
        <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import TmMagazineData from "./TmMagazineData"
export default {
  data: () => ({
    testImg: require("@/assets/tm/tm17cover.jpg"),
    snackbar: false,
    snackbarMsg: "",
    items: TmMagazineData
  }),
  methods: {
    copy: function(e) {
      this.snackbarMsg = "链接已复制剪贴板";
      this.snackbar = true;
      console.log(e);
    },
    onError: function(e) {
      this.snackbarMsg = "链接复制失败";
      this.snackbar = true;
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>