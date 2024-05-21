<script setup>
import Card from '@/components/Card.vue';
import quizzes from '@/data/quizzes.json';
import { ref, watch } from 'vue';
import gsap from 'gsap';

  const quizzesData = ref(quizzes)
  const search = ref('')

  watch(search, (value) => {
    quizzesData.value = quizzes.filter(quiz => quiz.name.toLowerCase().includes(value.toLowerCase()))
  })

  const beforeEnter = (el) => {
    // card-enter-from
    el.style.opacity = 0;
    el.style.transform = 'translateY(-100px)';
  }

  const enter = (el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0, // transform: translateY(0)
      duration: 0.3, // 400ms
      delay: el.dataset.index * 0.3
    })
  }
</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <TransitionGroup 
        name="card" 
        appear
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <Card 
          v-for="(quiz, index) in quizzesData" 
          :key="quiz.id" 
          :quizInfo="quiz"
          :data-index="index"
        />
      </TransitionGroup>
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