<template>
  <div class="content">
    <div id="menu-docs" class="display-desktop">
      <!-- <input type="search" placeholder="Quick search..."> -->
      <span>Get started</span>
      <RouterLink to="/docs">Introduction</RouterLink>
      <RouterLink to="/docs/installation">Installation</RouterLink>
      <RouterLink to="/docs/theme">Theme</RouterLink>
      <RouterLink to="/docs/examples">Examples</RouterLink>
      <span>Components</span>
      <LinkCompo/>
    </div>
    <div class="content-docs">
      <ul class="breadcrumb">
        <li v-for="(route, index) in breadcrumbs" :key="index">
          <router-link v-if="route.path" :to="route.path">{{
            route.title
          }}</router-link>
          <span v-else>{{ route.title }}</span>
          <!-- Si c'est la dernière route, on affiche sans lien -->
        </li>
      </ul>
      <RouterView class="container-docs" />
      
    </div>
  </div>
</template>
<script>
import LinkCompo from '@/components/LinkCompo.vue';
export default {
  name: "DocsView",
  components:{
    LinkCompo
  },
  computed: {
    breadcrumbs() {
      const matchedRoutes = this.$route.matched;
      return matchedRoutes.map((route) => ({
        title: route.meta.title,
        path: route.path,
      }));
    },
  },
};
</script>
<style>



.content {
  display: flex;
  flex-direction: column;
  height:calc(100vh - 5rem);
  overflow: hidden;
}
.content-docs {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
@media screen and (min-width: 768px) {
  .content {
    display: grid;
    grid-template-columns: 200px auto;
  }
  #menu-docs {
    display: flex;
    flex-direction: column;
    padding:0 1rem;
    border-right: var(--border-color);
    height: 100%;
    overflow-y: auto;
    margin-top: 1rem;
  }
  #menu-docs a {
    margin: 0;
  }
}
</style>
