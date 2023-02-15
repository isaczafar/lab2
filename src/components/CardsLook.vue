<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" alt="Card Image">
    </div>
    <div class="card-content">
      <span class="card-title card-name">{{ name }}</span>
      <p>{{ type }}</p>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: String,
    type: String,
    desc: String,
    image: String,
  },
  data() {
    return {
      inputValue: ''
    }
  }
};
</script>


<style scoped>
.card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px #ccc;
  width: 200px;
  height: 300px;
}

.card-image {
  height: 50%;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-content {
  color: white;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: white !important;
  margin-bottom: 0.5rem;
}

.card-name {
  color: white;
}
</style>
