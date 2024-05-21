<script setup>
  const { quizQuestionLength, numberOfCorrectAnswers, quizInfo } = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers', 'quizInfo'])

  const reloadPage = () => {
    location.reload();
  }
</script>

<template>
  <div class="results">
    <p>Your Results...</p>
    <h2>
      {{ numberOfCorrectAnswers }} / {{ quizQuestionLength }}
    </h2>
    <div v-if="quizInfo" class="buttonContainer">
      <button @click="reloadPage">Try again</button>
    </div>
  </div>
</template>

<style scoped>
  .results {
    text-align: center;
    padding: 100px 0;
  }

  p{
    font-size: 24px;
  }

  h2 {
    font-size: 80px;
  }

  .buttonContainer {
    margin-top: 40px;
  }

  button {
    text-decoration: none;
    color: black;
    background-color: bisque;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s ease;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(0, 0, 0);
    color: bisque;    
  }
</style>