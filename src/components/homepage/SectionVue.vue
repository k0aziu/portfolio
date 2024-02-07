<template>
  <div>
    <vs-row w="12" class="size-4">
      <vs-col :offset="variant ? '1' : '5'" w="6">
        <span class="title-handler">
          <i class="bx bx-hash hash" />
          <p class="section-title">{{ title }}</p>
        </span>
        <p class="section-title-mini">{{ titleMini }}</p>
        <p class="section-desc">{{ desc }}</p>
      </vs-col>
    </vs-row>
    <vs-row w="12">
      <vs-col :offset="variant ? '8' : '1'" w="4">
        <ImageCard title="" desc="" :image="image" />
      </vs-col>
    </vs-row>
    <vs-row w="12" class="buttons-container">
      <vs-col :offset="variant ? '1' : '8'" w="8">
        <div class="buttons-inline">
          <vs-button shadow>
            <i class="bx bx-link-external" style="font-size: 20px; margin-right: 10px;" />
            Otwórz
          </vs-button>
          <vs-button shadow>
            <i class="bx bx-book" style="font-size: 20px; margin-right: 10px;" />
            Przeczytaj
          </vs-button>
          <vs-button shadow>
            <i class="bx bx-headphone" style="font-size: 20px; margin-right: 10px;" />
            Posłuchaj
          </vs-button>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ImageCard from '@/components/common/ImageCard.vue'

export default {
  name: 'SectionVue',
  components: {
    ImageCard
  },
  props: {
    variant: Boolean,
    title: String,
    titleMini: String,
    desc: String,
    image: String,
  }
}
</script>

<style scoped>
.title-handler {
  display: flex;
}

.buttons-inline {
  display: flex;
  justify-content: start;
}

.hash {
  color: rgba(20,20,20,1);
  background-color: #1c7deccb;
  border-radius: 20px;
  padding: 3px 8px 3px 8px;
  margin-right: 10px;
  font-weight: 100;
  font-size: 4em;
  margin-top: 21vh;
  text-align: left;
  font-weight: 100;
}

.section-title {
  font-size: 4em;
  margin-top: 20vh;
  text-align: left;
  font-weight: 100;
}

.section-title-mini {
  text-align: left;
  font-size: 1.7em;
  margin-top: 6px;
  margin-left: 20px;
  margin-left: 20px;
}

.section-desc {
  text-align: left;
  margin-top: 10px;
  text-indent: 1em;
  margin-left: 20px;
  font-size: 1.1em;
}

.button-link {
  position: absolute;
  bottom: 0;
}
</style>

