<template>
  <div class="nav-buttons">
    <div class="nav-item">
      <div class="kulka" :class="{ 'active': activeSection === 0 }"></div>
      <span>WriteQuietSuccess</span>
    </div>
    <div class="nav-item">
      <div class="kulka" :class="{ 'active': activeSection === 1 }"></div>
      <span>Co to jest?</span>
    </div>
    <div class="nav-item">
      <div class="kulka" :class="{ 'active': activeSection === 2 }"></div>
      <span>Wstęp</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavButtons',
  data() {
    return {
      activeSection: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollPosition < height * 0.33) {
        this.activeSection = 0
      } else if (scrollPosition < height * 0.66) {
        this.activeSection = 1
      } else {
        this.activeSection = 2
      }
    },
  },
}
</script>

<style scoped>
.nav-buttons {
  z-index: 999;
  position: fixed;
  left: 10px;
  top: 50vh;
  translate: 0 -50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-item {
  color: black;
  display: flex;
  justify-items: center;
  align-items: baseline;
  gap: 6px;
  flex-direction: row;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 50%;
  color: black;
  cursor: default;
  font-size: .8em;
}

.kulka {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(194, 194, 194);
  margin-left: 5px;
}

.active {
  background-color: rgb(34, 34, 34);
}
</style>
