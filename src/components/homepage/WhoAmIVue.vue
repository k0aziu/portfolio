<template>
    <div>
        <vs-row w="12" class="size-1 section"></vs-row>
        <vs-row w="12" class="size-8 section">
        <vs-col offset="1" w="6">
            <vs-card type="4">
                <template #title>
                    <h3>Michał Kazienko</h3>
                </template>
                <template #img>
                    <img :src="require('@/assets/profile.jpg')" alt="">
                </template>
                <template #text>
                    <p>
                        Uczeń technikum, programista interesujący się cyberbezpieczeństwem oraz psychologią.
                    </p>
                </template>
                <template #interactions>
                    <vs-button dark icon @click="openInstagram">
                        <i class='bx bxl-instagram'></i>
                    </vs-button>
                    <vs-button dark icon @click="openGithub">
                        <i class='bx bxl-github'></i>
                    </vs-button>
                    <vs-button dark icon @click="openPinterest">
                        <i class='bx bxl-pinterest'></i>
                    </vs-button>
                </template>
            </vs-card>
        </vs-col>
      </vs-row>
    </div>
</template>
  
<script>
export default {
    name: 'WhoAmIVue',
    methods: {
        openInstagram() {
            window.open('https://instagram.com/koaziu.sh', '_blank');
        },
        openGithub() {
            window.open('https://github.com/k0aziu', '_blank');
        },
        openPinterest() {
            window.open('https://pl.pinterest.com/k0aziu', '_blank');
        }
    }
}
</script>
  
<style scoped>
</style>
