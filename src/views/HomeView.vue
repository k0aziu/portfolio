<template>
  <div class="full-size-site">
    <vs-row w="12" class="row-1">
      <vs-col offset="0" class="size-10">
        <div class="text-align-center">
          <p class="text-header-title">WriteQuietSuccess</p>
          <p class="text-header-desc"><s>Moja</s> Twoja lepsza przyszłośc.</p>
        </div>
      </vs-col>
    </vs-row>
    <vs-row w="12" class="black-to-white">
      <div class="shadow"></div>
    </vs-row>

    <PartVue title="Kim jestem?" />

    <WhoAmI />

    <PartVue title="Projekty" />

    <SectionVue
    variant
    title="Blog"
    titleMini="Lorem ipsum dolor sit amet, consectetur adipiscing"
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum."
    :image="require('@/assets/blog.jpg')" />
    
    <OrnamentVue />

    <vs-row w="12" class="size-2"></vs-row>
    <SectionVue
    title="Filmy"
    titleMini="Lorem ipsum dolor sit amet, consectetur adipiscing"
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum."
    :image="require('@/assets/filmy.jpg')" />

    <OrnamentVue />

    <vs-row w="12" class="size-2"></vs-row>
    <SectionVue
    variant
    title="Podcast"
    titleMini="Lorem ipsum dolor sit amet, consectetur adipiscing"
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus lacinia odio vitae vestibulum vestibulum."
    :image="require('@/assets/podcast.jpg')" />

    <OrnamentVue />

    <PartVue title="Inspiracje" />

    <InspirationsVue />
  
    <PartVue title="Kontakt" />

    <ContactVue />
  
  </div>
</template>

<script>
import SectionVue from '@/components/homepage/SectionVue.vue'
import PartVue from '@/components/homepage/PartVue.vue'
import ContactVue from '@/components/homepage/ContactVue.vue'
import OrnamentVue from '@/components/homepage/OrnamentVue.vue'
import WhoAmI from '@/components/homepage/WhoAmIVue.vue'
import InspirationsVue from '@/components/homepage/InspirationsVue.vue'

export default {
  name: 'HomeView',
  components: {
    SectionVue,
    PartVue,
    ContactVue,
    OrnamentVue,
    WhoAmI,
    InspirationsVue
  },
  props: {
  }
}
</script>

<style scoped>

.black-to-white>div {
  /* background-color: aqua; */
  z-index: -1;
  width: 100vw;
  height: 30px;
  border-radius: 0 0 40px 40px;
  background-color: rgba(20,20,20,1);
  /* background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(255,255,255,1) 100%); */
}

.row-1 {
  background-color: rgba(20,20,20,1);
  color: white;
}
.text-header-title {
  font-family: 'Baskervville', serif;
  margin-top: 40vh;
  font-size: 4em;
}

.text-header-desc {
  font-family: 'Baskervville', serif;
  font-size: 1.8em;
}

</style>
