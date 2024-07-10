<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        count: 0,
      };
    },
  };
</script>
