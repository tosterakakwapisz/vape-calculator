<template>
  <label :for="id" class="form-label">{{ description }}</label>
  <input v-model.number="inputValue" :id type="number" class="form-control" />
</template>

<script setup>
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });

  const inputValue = defineModel("inputValue");
</script>
