<template>
  <label :for="id" class="form-label">{{ description }}</label>
  <input
    :value
    :id
    type="text"
    @input="updateInput($event.target.value)"
    class="form-control"
  />
</template>

<script setup>
  defineProps({
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmits({
    "update-input": function (newValue) {
      return typeof newValue === "number";
    },
  });

  /** @param {string} newValue */
  function updateInput(newValue) {
    const parsedValue = newValue ? parseInt(newValue) : 0;
    emit("update-input", parsedValue);
  }
</script>
