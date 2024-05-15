<script setup>
import Card from '@/components/Card.vue';
import quizzes from '@/data/quizzes.json';
import { ref, watch } from 'vue';

  const quizzesData = ref(quizzes)
  const search = ref('')

  watch(search, (value) => {
    quizzesData.value = quizzes.filter(quiz => quiz.name.toLowerCase().includes(value.toLowerCase()))
  })
</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizzesData" :key="quiz.id" :quizInfo="quiz"/>
    </div>
  </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
</style>