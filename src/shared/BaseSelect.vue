<template>
  <div class="form-group mb-3">
    <select
        v-model="selected"
        class="form-select"
        @change="onSelect"
    >
      <option disabled value="">{{ label }}</option>
      <option
          v-for="option in options"
          :key="option.key"
          :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      default: 'Страна'
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    onSelect() {
      this.$emit('selected-value', this.selected);
    }
  }
}
</script>