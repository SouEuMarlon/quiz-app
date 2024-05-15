<script setup>
const {questionStatus, barPercentage} = defineProps(['questionStatus', 'barPercentage'])
</script>
<template>
  <div>
    <RouterLink to="/">Go back</RouterLink>
    <header>
      <h4>Question {{questionStatus}}</h4>
      <div class="bar">
        <div class="completion" :style="{width: barPercentage}"></div>
      </div>
    </header>
  </div>
</template>

<style scoped>
a {
  padding: 10px 20px;
  background-color: bisque;
  border-radius: 5px;
  text-decoration: none;
  color: black;
}

header {
  margin-top: 40px;
}

h4 {
  font-size: 30px;
}

.bar {
  border: 2px solid bisque;
  height: 50px;
  width: 300px;
}

.completion {
  background-color: bisque;
  height: 100%;
  width: 0%;
}
</style>