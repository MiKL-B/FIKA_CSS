<template>
  <div class="page-404">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>The page does not exist.</p>
    <router-link to="/" class="button primary">Go Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundCompo",
};
</script>
<style>
.page-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 24px;
}
</style>
