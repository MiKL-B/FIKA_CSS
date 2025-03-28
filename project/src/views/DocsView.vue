<template>
  <div class="content">
    <div id="menu-docs" class="display-desktop">
      <LinkCompo />
    </div>
    <div class="content-docs">
      <ul class="breadcrumb">
        <li v-for="(route, index) in matchedRoutes" :key="index">
          <router-link v-if="route.path" :to="route.path">{{
            route.title
          }}</router-link>
          <span v-else>{{ route.title }}</span>
        </li>
      </ul>
      <RouterView class="container-docs" />

      <div class="flex justify-between p-4 capitalize">
        <RouterLink
          :to="getPreviousLink()"
          v-if="getPreviousLink()"
          class="text-left"
          >{{ getPreviousName() }}</RouterLink
        >
        <span v-else></span>
        <RouterLink
          :to="getNextLink()"
          v-if="getNextLink()"
          class="text-right"
          >{{ getNextName() }}</RouterLink
        >
        <span v-else></span>
      </div>
    </div>
  </div>
</template>
<script>
import LinkCompo from "@/components/LinkCompo.vue";
export default {
  name: "DocsView",
  components: {
    LinkCompo,
  },
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
            { name: "avatar", url:"/docs/avatar"},
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
            { name: "tabs", url: "/docs/tabs"},
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
    matchedRoutes() {
      const match = this.$route.matched;
      return match.map((route) => ({
        title: route.meta.title,
        path: route.path,
      }));
    },
    currentLink() {
      // Trouver le chemin actuel
      return this.$route.path;
    },
    currentLinkIndex() {
      for (const section of this.sections) {
        const linkIndex = section.links.findIndex(
          (link) => link.url === this.currentLink
        );
        if (linkIndex !== -1) {
          return {
            sectionIndex: this.sections.indexOf(section),
            linkIndex: linkIndex,
            sectionTitle: section.title,
          };
        }
      }
      return null;
    },
  },
  methods: {
    getPreviousLink() {
      const { sectionIndex, linkIndex } = this.currentLinkIndex || {};
      if (sectionIndex !== undefined && linkIndex > 0) {
        return this.sections[sectionIndex].links[linkIndex - 1].url;
      } else if (sectionIndex > 0) {
        const previousSection = this.sections[sectionIndex - 1];
        return previousSection.links[previousSection.links.length - 1].url;
      }
      return null;
    },
    getPreviousName() {
      const { sectionIndex, linkIndex } = this.currentLinkIndex || {};
      if (sectionIndex !== undefined && linkIndex > 0) {
        return this.sections[sectionIndex].links[linkIndex - 1].name;
      } else if (sectionIndex > 0) {
        const previousSection = this.sections[sectionIndex - 1];
        return previousSection.links[previousSection.links.length - 1].name;
      }
      return null;
    },
    getNextLink() {
      const { sectionIndex, linkIndex } = this.currentLinkIndex || {};
      if (
        sectionIndex !== undefined &&
        linkIndex < this.sections[sectionIndex].links.length - 1
      ) {
        return this.sections[sectionIndex].links[linkIndex + 1].url;
      } else if (sectionIndex < this.sections.length - 1) {
        const nextSection = this.sections[sectionIndex + 1];
        return nextSection.links[0].url;
      }
      return null;
    },
    getNextName() {
      const { sectionIndex, linkIndex } = this.currentLinkIndex || {};
      if (
        sectionIndex !== undefined &&
        linkIndex < this.sections[sectionIndex].links.length - 1
      ) {
        return this.sections[sectionIndex].links[linkIndex + 1].name;
      } else if (sectionIndex < this.sections.length - 1) {
        const nextSection = this.sections[sectionIndex + 1];
        return nextSection.links[0].name;
      }
      return null;
    },
  },
};
</script>
<style>
.content {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
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
