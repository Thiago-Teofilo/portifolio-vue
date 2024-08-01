import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => {
    return {
      isLightTheme: false,
    };
  },
  actions: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      localStorage.setItem('isLightTheme', JSON.stringify(this.isLightTheme));
      this.applyTheme();
    },
    loadThemeFromLocalStorage() {
      const savedTheme = localStorage.getItem('isLightTheme');
      if (savedTheme !== null) {
        this.isLightTheme = JSON.parse(savedTheme);
        this.applyTheme();
      } else {
        localStorage.setItem('isLightTheme', JSON.stringify(this.isLightTheme));
        this.loadThemeFromLocalStorage();
      }
    },
    applyTheme() {
      if (this.isLightTheme) {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    },
  },
});
