<template>
  <div v-for="section in sections" :key="section.title">
    <span>{{ section.title }}</span>
    <ul class="links">
      <li class="link-doc capitalize" v-for="link in section.links">
        <RouterLink @click="handle" :key="link.id" :to="link.url">{{
          link.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LinkCompo",
  data() {
    return {
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
            { name: "blockquote", url: "/docs/blockquote" },
            { name: "breadcrumb", url: "/docs/breadcrumb" },
            { name: "button", url: "/docs/button" },
            { name: "datalist", url: "/docs/datalist" },
            { name: "details", url: "/docs/details" },
            { name: "fieldset", url: "/docs/fieldset" },
            { name: "input", url: "/docs/input" },
            { name: "lists", url: "/docs/lists" },
            { name: "select", url: "/docs/select" },
            { name: "separator", url: "/docs/separator" },
            { name: "tables", url: "/docs/tables" },
            { name: "textarea", url: "/docs/textarea" },
            { name: "typography", url: "/docs/typography" },
          ],
        },
        {
          title:"Utilities",
          links:[
            {name:"classes",url:"/docs/classes"},
            {name:"grid",url:"/docs/grid"},
            {name:"media queries",url:"/docs/mediaqueries"},
          ]
        },
        {
          title: "About",
          links: [
            { name: "contact", url: "/contact" },
            { name: "changelog", url: "/changelog" },
          ],
        },
      ],
    };
  },
  emits: ["child-click"],
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
