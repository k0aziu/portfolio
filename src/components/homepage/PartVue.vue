<template>
  <div>
      <vs-col offset="0">
        <div class="text-align-center">
          <p class="part">{{ title }}</p>
        </div>
      </vs-col>
  </div>
</template>

<script>

export default {
  name: 'PartVue',
  components: {
  },
  props: {
    title: String
  }
}
</script>

<style scoped>

.part {
  font-size: 3.5em;
  font-style: oblique;
  font-weight: 500;
  margin-top: 20vh;
  color: rgba(20,20,20,1);
}
</style>