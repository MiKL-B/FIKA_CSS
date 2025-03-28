<template>
  <div v-for="section in sections" :key="section.title">
    <span>{{ section.title }}</span>
    <ul class="links">
      <li class="flex gap-4 link-doc capitalize" v-for="link in section.links">
        <RouterLink @click="handle" :key="link.id" :to="link.url">{{
          link.name
        }}</RouterLink>
        <span v-if="link.version === latestVersion">New!</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { useVersionStore } from '@/store/index';
export default {
  name: "LinkCompo",
  emits: ["child-click"],
  data() {
    return {
      versionStore: useVersionStore(),
      sections: [
        {
          title: "Get started",
          links: [
            { name: "introduction", url: "/docs" },
            { name: "installation", url: "/docs/installation" },
            { name: "theme", url: "/docs/theme" },
            { name: "examples", url: "/docs/examples" },
          ],
        },
        {
          title: "Components",
          links: [
            { name: "avatar" , url:"/docs/avatar", version:"1.1.0"},
            { name: "blockquote", url: "/docs/blockquote" },
            { name: "breadcrumb", url: "/docs/breadcrumb" },
            { name: "button", url: "/docs/button" },
            { name: "datalist", url: "/docs/datalist" },
            { name: "details", url: "/docs/details" },
            { name: "fieldset", url: "/docs/fieldset" },
            { name: "image", url: "/docs/image" },
            { name: "input", url: "/docs/input" },
            { name: "lists", url: "/docs/lists" },
            { name: "section", url: "/docs/section" },
            { name: "select", url: "/docs/select" },
            { name: "separator", url: "/docs/separator" },
            { name: "tables", url: "/docs/tables" },
            { name: "tabs", url: "/docs/tabs", version:"1.1.0"},
            { name: "textarea", url: "/docs/textarea" },
            { name: "typography", url: "/docs/typography" },
          ],
        },
        {
          title:"Utilities",
          links:[
            {name:"classes",url:"/docs/classes"},
            {name:"grid",url:"/docs/grid"},
          ]
        },
      ],
    };
  },
  
  computed: {
    latestVersion() {
      return this.versionStore.latestVersion;
    }
  },
  methods: {
    handle() {
      this.$emit("child-click", this.message);
    },
  },
};
</script>
<style>
.links {
  margin: 0;
  padding: 0;
}
.link-doc {
  list-style-type: none;
}
</style>
