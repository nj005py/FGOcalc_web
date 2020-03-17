<template>
  <v-app id="inspire">
    <!-- 抽屉菜单 -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <!-- 占位图 -->
      <v-card color="#1E88E5" flat="true" height="200px">
        <v-row align="center" class="lightbox white--text pa-2 fill-height">
          <v-col align="center">
            <v-img  max-width="48px" max-height="48px" src="../../public/ic_launcher.png"></v-img>
            <div class="body-1">FGOcalc Web</div>
          </v-col>
        </v-row>
      </v-card>
      <!-- 列表 -->
      <v-list dense>
        <template v-for="item in items">
          <v-list-item  :key="item.text" link @click="toPath(item.path)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- app栏 -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 400px" class="ml-0 pl-4">
        <!-- <span >{{currentPage}}</span> -->
        <span >{{this.$route.name}}</span>
      </v-toolbar-title>
      <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      /> -->
      <v-spacer />
      <v-btn icon href="https://github.com/nj005py/FGOcalc">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- 内容 -->
    <v-content app>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- 悬浮按钮 -->
    <!-- <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn> -->
    <!-- 弹窗 -->
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">Create contact</v-card-title>
        <v-container></v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    currentPage:"简介",
    items: [
      { icon: "mdi-home", text: "简介", path: "/introducton" },
      { icon: "mdi-file-cabinet", text: "fgo攻略收集", path: "/GameStrategyPage" },
      { icon: "mdi-calculator", text: "FGOcalc引导页（草稿）", path: "/FGOcalcGuidePage" },
      { icon: "mdi-book", text: "TM吧吧刊阅览室（草稿）", path: "/TmMagazineList" },
      { icon: "mdi-message", text: "反馈", path: "/FeedbackPage" },
    ]
  }),
 methods:{
   toPath:function(path){
     this.$router.push({path:path});
   },
 } ,
};
</script>

<style>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>