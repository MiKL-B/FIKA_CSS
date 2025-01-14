<template>
  <nav id="nav-desktop">
    <div>
      <span>☕</span>
      <RouterLink to="/">Fika CSS</RouterLink>
    </div>
    <div id="nav-desktop-right">
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/changelog">Changelog</RouterLink>
      <span @click="toggleTheme" aria-label="Toggle themes">
        <svg
          v-if="theme === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color: var(--blue)"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color: var(--yellow)"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
    </div>
  </nav>
  <!-- mobile -->
  <nav id="nav-mobile">
    <div>
      <span>☕</span>
      <RouterLink to="/">Fika CSS</RouterLink>
    </div>
    <div class="bars-container">
      <span @click="toggleTheme" aria-label="Toggle themes">
        <svg
          v-if="theme === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color: var(--blue)"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color: var(--yellow)"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
      <svg
        v-if="isMenuMobileOpen === false"
        @click="isMenuMobileOpen = true"
        class="bars"
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
      <svg
        v-else
        @click="isMenuMobileOpen = false"
        class="bars"
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  </nav>
  <div id="menu-mobile" v-if="isMenuMobileOpen && windowWidth < 768">
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
      windowWidth: window.innerWidth,
      theme: "dark",
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
    let localTheme = localStorage.getItem("theme");
    if (localTheme) {
      this.theme = localTheme;
    }
    document.documentElement.setAttribute("data-theme", localTheme);
    this.updateTheme();
  },

  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.updateTheme();
    },
    updateTheme() {
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>
<style>
nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border-bottom: var(--border-color);
}
nav a {
  margin: 0;
}
#nav-desktop {
  display: none;
}
#nav-mobile {
  justify-content: space-between;
  line-height: 100%;
}
#menu-mobile {
  position: absolute;
  top: 0.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 3;
}
#menu-mobile a {
  margin: 0;
}
.bars-container {
  z-index: 9999;
}
.bars {
  z-index: 9999;
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  #nav-desktop {
    display: flex;
    justify-content: space-between;
    line-height: 100%;
  }
  #nav-desktop-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  #nav-desktop svg {
    cursor: pointer;
  }
  #nav-mobile {
    display: none;
  }
}
</style>
