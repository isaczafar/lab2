<template>
  <div>
    <h1 class="big-text">Cards belonging to the Red-Eyes archetype</h1>
    <ul v-if="cards.length" style="display: flex; flex-wrap: wrap;">
      <li v-for="card in cards" :key="card.id" style="margin: 10px;">
        <Card :card="card" />
      </li>
    </ul>
  </div>
</template>

<style>
.card {
  width: 350px;
  float: left;
}
</style>

<script>
import axios from 'axios'
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: []
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Red-Eyes')
      .then(response => {
        this.cards = response.data.data
      })
      .catch(error => {
        console.log(error)
      })

  }
}


</script>
