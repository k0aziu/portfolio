<template>
  <div>
    <vs-row w="12" class="space-top size-4" >
      <vs-col offset="1" w="4">
        <p class="contact-desc">
          Jeżeli masz jakiekolwiek pytania - napisz do mnie.
          Jestem dostępny na moich social mediach, jednak równie dobrze możesz skontaktować się zemną drogą mailową:
          <span>k0aziuu@gmail.com</span>
        </p>
      </vs-col>
      <vs-col offset="3" w="3">
        <ImageCard title="Napisz do nas" desc="Odpowiemy tak szybko, jak to możliwe!" :image="require('@/assets/contact.jpg')" />
      </vs-col>
    </vs-row>
    <vs-row w="12" class="buttons-container">
      <vs-col offset="1" w="4">
        <div class="buttons-inline">
          <vs-button shadow @click="openDiscord">
            <i class="bx bxl-discord" style="font-size: 50px;" />
          </vs-button>
          <vs-button shadow>
            <i class="bx bxl-facebook-square" style="font-size: 50px;" />
          </vs-button>
          <vs-button shadow>
            <i class="bx bxl-instagram" style="font-size: 50px;" />
          </vs-button>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ImageCard from '@/components/common/ImageCard.vue'

export default {
  name: 'ContactVue',
  components: {
    ImageCard
  },
  methods: {
    openDiscord() {
      window.open('https://discordapp.com/users/725816686296432761', '_blank');
    }
  },
  props: {
  }
}
</script>

<style scoped>
.contact-desc {
  text-align: center;
  margin-top: 50px;
  font-size: 1.1em;
  margin: 20px;
}

.contact-desc>span {
  color: #164780cb;
}

.buttons-inline {
  display: flex;
  justify-content: center;
}

.space-top {
  margin-top: 150px;
}
</style>