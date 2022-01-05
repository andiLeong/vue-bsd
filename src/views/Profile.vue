<template>
  <div>profile section</div>
</template>

<script setup>
axios
  .get('/api/user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
</script>
