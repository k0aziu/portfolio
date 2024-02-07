<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* FONTS */

@import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

* {
  font-family: 'Mulish', sans-serif;
}

/* FONTS */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  background-color: white;
  height: 100%;
  width: 100%;
  margin: 0;
}

.slide {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}





.text-align-center {
  text-align: center;
}


.size-1 {
  height: 10vh;
}

.size-2 {
  height: 20vh;
}

.size-3 {
  height: 30vh;
}

.size-4 {
  height: 40vh;
}

.size-5 {
  height: 50vh;
}

.size-6 {
  height: 60vh;
}

.size-7 {
  height: 70vh;
}

.size-8 {
  height: 80vh;
}

.size-9 {
  height: 90vh;
}

.size-10 {
  height: 100vh;
}

.full-size-site {
  /* height: 1000vh; */
}

.shadow {
  -webkit-box-shadow: 0px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 24px 0px rgba(66, 68, 90, 1);
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: rgb(10, 10, 10);
}

::-webkit-scrollbar-thumb {
  background: #505050;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::selection {
  background-color: #0d519e81;
}
</style>
