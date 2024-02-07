<template>
    <div>
        <vs-row w="12" class="size-1"></vs-row>
        <vs-row w="12" class="size-8" justify="center">
            <ImageCardInspiration
            title="Stanisław Trojanowski"
            desc="Ziomek od samorozwoju, stoicyzmu i biznesu, pilot, producent muzyczny, MC"
            :image="require('@/assets/profiles/strojanowski.jpg')"
            youtubeLink="https://www.youtube.com/@stastrojanowski" />
            
            <ImageCardInspiration
            title="Michał Kuryłek"
            desc="Twój ziomek, student medycyny z listy Forbesa"
            :image="require('@/assets/profiles/mkurylek.jpeg')"
            youtubeLink="https://www.youtube.com/@michal.kurylek" />

            <ImageCardInspiration
            title="Karol Nowicki"
            desc="Po ziomalsku o życiu"
            :image="require('@/assets/profiles/knowicki.jpg')"
            youtubeLink="https://www.youtube.com/@KarolNowickiKanal" />
            
            <ImageCardInspiration
            title="JaMichał"
            desc="Kolega fajnie opowiada o życiu prostymi słowami"
            :image="require('@/assets/profiles/jamichal.jpg')"
            youtubeLink="https://www.youtube.com/@ja.michal" />

            <ImageCardInspiration
            title="Przemek Górczyk"
            desc="Rozmawiam z każdym kto w moim odczuciu ma coś ważnego do przekazania"
            :image="require('@/assets/profiles/pgorczyk.jpg')"
            youtubeLink="https://www.youtube.com/@przemekgorczykpodcast" />
        </vs-row>
    </div>
</template>
  
<script>
import ImageCardInspiration from '../homepage/ImageCardInspiration.vue';

export default {
    name: 'InspirationsVue',
    components: {
        ImageCardInspiration
    },
}
</script>
  
<style scoped></style>