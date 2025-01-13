<template>
  <RouterLink @click="handle"
    class="link-doc"
    v-for="link in links"
    :key="link.id"
    :to="`/docs/${link.name}`"
    >{{ link.name }}</RouterLink
  >
</template>
<script>
export default {
  name: "LinkCompo",
  data() {
    return {
      links: [
        {
          name: "blockquote",
        },
        {
          name: "button",
        },
        {
          name: "datalist",
        },
        {
          name: "details",
        },
        {
          name: "fieldset",
        },
        {
          name: "input",
        },
        {
          name: "lists",
        },
        {
          name: "select",
        },
        {
          name: "separator",
        },
        {
          name: "tables",
        },
        {
          name: "textarea",
        },
        {
          name: "typography",
        },
      ],
    };
  },
  emits: ['child-click'],
  methods:{
    handle(){
        this.$emit('child-click', this.message);
    }
  }
};
</script>
<style>
.link-doc{
  text-transform: capitalize;
}
</style>