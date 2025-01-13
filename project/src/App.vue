<template>
  <nav id="nav-desktop">
    <span>☕</span>
    <RouterLink to="/">Fika CSS</RouterLink>
  </nav>
  <!-- mobile -->
  <nav id="nav-mobile">
    <div>
      <span>☕</span>
      <RouterLink to="/">Fika CSS</RouterLink>
    </div>

    <svg
      @click="isMenuMobileOpen = !isMenuMobileOpen"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  </nav>
  <div id="menu-mobile" v-if="isMenuMobileOpen">
    <span>Get started</span>
    <RouterLink @click="isMenuMobileOpen = false" to="/docs"
      >Introduction</RouterLink
    >
    <RouterLink @click="isMenuMobileOpen = false" to="/docs/installation"
      >Installation</RouterLink
    >
    <RouterLink @click="isMenuMobileOpen = false" to="/docs/examples"
      >Examples</RouterLink
    >
    <span>Components</span>

    <LinkCompo @child-click="isMenuMobileOpen = false" />
  </div>

  <RouterView />
</template>

<script>
import LinkCompo from "./components/LinkCompo.vue";

export default {
  name: "App",
  components: {
    LinkCompo,
  },
  data() {
    return {
      isMenuMobileOpen: false,
    };
  },
};
</script>
<style>
nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--light-grey);
}
nav a {
  margin: 0;
}
#nav-desktop {
  display: none;
}
#nav-mobile {
  justify-content: space-between;
}
#menu-mobile {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: white;
  border-right: 1px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  z-index: 10;
}
#menu-mobile a {
  margin: 0;
}

@media screen and (min-width: 768px) {
  #nav-desktop {
    display: flex;
  }
  #nav-mobile {
    display: none;
  }
}
</style>
