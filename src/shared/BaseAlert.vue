<template>
  <div v-if="show" class="alert alert-warning" role="alert">
   {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '',
    },
  }
}
</script>