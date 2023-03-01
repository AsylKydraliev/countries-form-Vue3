<template>
  <div>
    <base-select
        label="Выберите страну"
        :options="countries"
        @selected-value="emitSelectedCountry"
    />
  </div>
</template>

<script>
import BaseSelect from "@/shared/BaseSelect.vue";

export default {
  components: {
    BaseSelect
  },
  props: {
    countries: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitSelectedCountry(countryName) {
      this.$emit('selected-value', countryName);
    }
  }
}
</script>