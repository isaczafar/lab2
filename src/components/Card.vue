// Card.vue

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" :alt="`Image of ${card.name}`" />
        <h2 class="card-title">{{ card.name }}</h2>
        <button v-on:click="isPopupOpen = true">View Details</button>
        <card-popup :card="card" :is-open="isPopupOpen" :close="() => isPopupOpen = false" />
    </div>
</template>

<script>
import CardPopup from './CardPopup.vue';

export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    components: {
        CardPopup
    },
    data() {
        return {
            isPopupOpen: false
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
</style>