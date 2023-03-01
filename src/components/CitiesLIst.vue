<template>
  <div>
    <base-select
        label="Выберите город"
        :options="cities"
        @selected-value="emitSelectedRegion"
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
    cities: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitSelectedRegion(citiesName) {
      this.$emit('selected-value', citiesName);
    }
  }
}
</script>