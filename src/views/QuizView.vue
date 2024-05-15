<script setup>
import quizzes from '@/data/quizzes.json';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Result from '../components/Result.vue';

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizzes.find(quiz => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
const barPercentage = computed(() => `${(currentQuestionIndex.value) / quiz.questions.length * 100}%`);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
}
</script>

<template>
  <div v-if="quiz">
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question 
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result 
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        :quizInfo="quiz"
      />
    </div>
  </div>
</template>

<style scoped>


</style>