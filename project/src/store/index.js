import { defineStore } from "pinia";

export const useVersionStore = defineStore("version", {
  state: () => ({
    versions: ["1.0.0", "1.1.0"],
  }),
  getters: {
    latestVersion(state) {
      let lastIndex = state.versions.length - 1;
      return state.versions[lastIndex];
    },
  },
});
