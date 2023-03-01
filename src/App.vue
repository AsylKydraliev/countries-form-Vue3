<template>
  <div>
    <form-view />
  </div>
</template>

<script>
import FormView from "@/views/FormView.vue";

export default {
  name: 'App',
  components: {FormView},
}
</script>

<style>
#app {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
