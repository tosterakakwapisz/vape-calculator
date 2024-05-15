<template>
  <div class="row">
    <div class="col col-md-6 offset-md-3">
      <div class="row">
        <div class="col">
          <label for="bottleVolume" class="form-label">Butelka (ml)</label>
          <input
            v-model.number="bottleVolume"
            type="text"
            class="form-control"
            id="bottleVolume"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="mixStrength" class="form-label">
            Moc liquid'u (mg/ml)
          </label>
          <input
            v-model.number="mixStrength"
            type="text"
            class="form-control"
            id="mixStrength"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">Ilość nikotyny: {{ nicotineAmount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";

  const bottleVolume = ref(100);
  const mixStrength = ref(5);

  const nicotineAmount = computed(() => bottleVolume.value * mixStrength.value);
</script>
