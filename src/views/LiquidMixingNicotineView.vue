<template>
  <div class="row">
    <div class="col">
      <h1>Ilość nikotyny</h1>
      <p class="pt-2">
        Oblicz ile nikotyny musisz wlać do butelki, aby osiągnąć żądaną moc.
        <br />
        Wymagane dane:
      </p>
      <ul>
        <li>pojemność butelki [ml]</li>
        <li>moc liquid'u [mg/ml] (standardowa jednostka)</li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col col-md-6 offset-md-3">
      <div class="row">
        <div class="col">
          <LiquidInputField
            id="bottleVolume"
            description="Butelka (ml)"
            :value="bottleVolume"
            @update-input="updateBottleVolume"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <LiquidInputField
            id="mixStrength"
            description="Moc liquid'u (mg/ml)"
            :value="mixStrength"
            @update-input="updateMixStrength"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">Ilość nikotyny: {{ nicotineAmount }}mg</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import LiquidInputField from "@/components/LiquidInputField.vue";
  import { computed, ref } from "vue";

  const bottleVolume = ref(150);
  const mixStrength = ref(6);

  const nicotineAmount = computed(() => bottleVolume.value * mixStrength.value);

  /** @param {number} newValue */
  function updateBottleVolume(newValue) {
    bottleVolume.value = newValue;
  }

  /** @param {number} newValue */
  function updateMixStrength(newValue) {
    mixStrength.value = newValue;
  }
</script>
