<template>
  <div>
    <base-select
        label="Выберите регион"
        :options="regions"
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
    regions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    emitSelectedRegion(regionName) {
      this.$emit('selected-value', regionName);
    }
  }
}
</script>