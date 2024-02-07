<template>
  <vs-card type="1">
    <!-- <template #title>
      <h3>{{ title }}</h3>
    </template> -->
    <template #img>
      <img :src="image" :alt="title">
    </template>
    <!-- <template #text>
      <p>
        {{ desc }}
      </p>
    </template> -->
  </vs-card>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: String,
    desc: String,
    image: String
  }
}
</script>

<style scoped></style>
