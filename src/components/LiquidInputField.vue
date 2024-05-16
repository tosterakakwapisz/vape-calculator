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
  const props = defineProps({
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

  const emit = defineEmits(["updateInput"]);

  /** @param {string} newValue */
  function updateInput(newValue) {
    const parsedValue = newValue ? parseInt(newValue) : 0;
    emit("updateInput", parsedValue, props.id);
  }
</script>
