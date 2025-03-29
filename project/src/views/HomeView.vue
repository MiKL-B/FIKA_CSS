<template>
  <div class="container">
    <div class="section-docs">
      <h1>Fika CSS</h1>
      <p>
        Discover the ideal minimalist framework for your chill code sessions in
        a coffee shop, with a good coffee and delicious pastries. Create elegant
        and clean interfaces while focusing on the essential: the logic of your
        code.
      </p>
      <div class="flex gap-4">
        <RouterLink to="/docs" class="button primary">Get started</RouterLink>
        <a
          href="https://github.com/MiKL-B/FIKA_CSS"
          target="_blank"
          class="button"
          >Github
          <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github-icon lucide-github"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg> -->
        </a
        >
      </div>
    </div>
    <div class="section-docs">
      <p>
        For the latest updates and improvements, please check the
        <RouterLink to="/changelog">changelog</RouterLink>.
      </p>
      <div class="flex gap-4">
        <a :href="`/assets/fika-v${selectedVersion}.css`" class="button" download
          >Download v{{ selectedVersion }}</a
        >
        
        <select v-model="selectedVersion" >
          <option :value="version" v-for="version in versions">v{{ version }}</option>
        </select>
      </div>
    </div>
    <div class="section-docs">
      <div class="row">
        <div class="col col-3 card">
          <div class="card-header">
            <h4 class="text-bold m-0">Light</h4>
            <p class="text-grey">Only ~400 lines of code</p>
          </div>
          <div class="card-content">
            <p>A minimalist framework that weighs only a few kilobytes.</p>
          </div>
        </div>
        <div class="col col-3 card">
          <div class="card-header">
            <h4 class="text-bold m-0">Responsive</h4>
            <p class="text-grey">Mobile-first</p>
          </div>
          <div class="card-content">
            <p>A fluid grid of 12 columns that adapts to all screens.</p>
          </div>
        </div>
        <div class="col col-3 card">
          <div class="card-header">
            <h4 class="text-bold m-0">Simple style</h4>
            <p class="text-grey">Clean and elegant design</p>
          </div>
          <div class="card-content">
            <p>
              Careful typography and minimalist components for a professional
              look.
            </p>
          </div>
        </div>
        <div class="col col-3 card">
          <div class="card-header">
            <h4 class="text-bold m-0">Ready to use</h4>
            <p class="text-grey">No configuration</p>
          </div>
          <div class="card-content">
            <p>Start immediately with elegant default styles.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-docs">
      <div class="row flex gap-4 justify-center text-center">
        <div class="col col-3">
          <h4 class="text-bold m-0">Simple Installation</h4>
          <p class="text-grey">A simple CSS file to include in your project.</p>
        </div>
        <div class="col col-3">
          <h4 class="text-bold m-0">Performance</h4>
          <p class="text-grey">Minimal impact on load time.</p>
        </div>
        <div class="col col-3">
          <h4 class="text-bold m-0">Customizable</h4>
          <p class="text-grey">Easy to modify and adapt to your needs.</p>
        </div>
      </div>
    </div>
    <footer class="text-center">
      <div class="row">
        <div class="col col-6">
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
        <div class="col col-6">
          <RouterLink to="/changelog">Changelog</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { useVersionStore } from '@/store/index';
export default {
  name: "HomeView",
  data() {
    return {
      selectedVersion:"",
      versionStore: useVersionStore()
    };
  },
  mounted(){
    this.selectedVersion = this.latestVersion
  },
  computed:{
    versions(){
      return this.versionStore.versions
    },
    latestVersion() {
      return this.versionStore.latestVersion;
    }
  }
};
</script>
