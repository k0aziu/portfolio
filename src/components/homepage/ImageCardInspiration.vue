<template>
    <div>
        <vs-row w="12" class="size-3">
            <vs-col offset="2" w="7">
                <vs-card type="2">
                    <template #title>
                        <h3>{{ title }}</h3>
                    </template>
                    <template #img>
                        <img :src="image" alt="">
                    </template>
                    <template #text>
                        <p>
                            {{ desc }}
                        </p>
                    </template>
                    <template #interactions>
                        <vs-button danger icon @click="openYoutube(youtubeLink)">
                            <i class='bx bxl-youtube'></i>
                        </vs-button>
                    </template>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>
  
<script>

export default {
    name: 'ImageCardInspiration',
    props: {
        column: Number,
        title: String,
        desc: String,
        image: String,
        youtubeLink: String
    },
    methods: {
        openYoutube(link) {
            window.open(link, '_blank');
        }
    },
}
</script>
  
<style scoped></style>