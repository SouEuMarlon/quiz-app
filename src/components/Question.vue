<script setup>
const {question} = defineProps(['question']) // defineProps é uma função que retorna um objeto com as propriedades definidas no componente.

const emit = defineEmits(['selectOption']) // defineEmits é uma função que retorna um objeto com as funções de emitir eventos definidas no componente.

const emitSelectedOption = (isCorrect) => {
  emit('selectOption', isCorrect)
}
</script>

<template>
  <div>
    <div class="question-container">
      <h1 class="question">
        {{question.text}}
      </h1>
    </div>
    <div class="options-container">
      <div class="option" 
        v-for="option in question.options" 
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
      >
        <p class="option-label">
          {{ option.label }}
        </p>
        <div class="option-value">
          <p>
            {{ option.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container{
  margin-top: 20px;
}

.question{
  font-size: 40px;
  margin-bottom: 20px;
}

.option{
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label{
  background-color: bisque;
  height: 50px;
  width: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value{
  background-color: rgb(244, 239, 239);
  font-size: 30px;
  width: 100%;
  padding: 0 20px;
}
</style>