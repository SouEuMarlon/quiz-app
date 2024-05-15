<script setup>
// import { RouterLink } from 'vue-router';
const {quizInfo} = defineProps(['quizInfo'])

</script>

<template>
  <div class="card">
    <RouterLink :to="`/quiz/${quizInfo.id}`">
      <img :src="quizInfo.img" :alt="quizInfo.name">
      <div class="card-text">
        <h2>{{quizInfo.name}}</h2>
        <p>{{ quizInfo.questions.length }} questions</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
  color: black;
}

 /* CARD */

 .card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0
}

.card .card-text {
  padding: 0 5px
}

.card .card-text h2 {
  font-weight: bold;
}

</style>