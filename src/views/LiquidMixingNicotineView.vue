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
        <li>(opcjonalnie) ilość nikotyny w szocie [mg]</li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col col-md-6 offset-md-3">
      <div class="row">
        <div class="col">
          <LiquidInputField
            id="bottleVolume"
            description="Butelka [ml]"
            :value="data.bottleVolume"
            @update-input="updateDataValue"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <LiquidInputField
            id="mixStrength"
            description="Moc liquid'u [mg/ml]"
            :value="data.mixStrength"
            @update-input="updateDataValue"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <LiquidInputField
            id="nicotineShotAmount"
            description="Ilość nikotyny w szocie [mg]"
            :value="data.nicotineShotAmount"
            @update-input="updateDataValue"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">Ilość nikotyny: {{ nicotineAmount }}mg</div>
      </div>
      <div class="row">
        <div class="col">Ilość szotów: {{ nicotineShotCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import LiquidInputField from "@/components/LiquidInputField.vue";
  import { computed, ref } from "vue";

  const data = ref({
    bottleVolume: 150,
    mixStrength: 6,
    nicotineShotAmount: 200,
  });

  const nicotineAmount = computed(
    () => data.value.bottleVolume * data.value.mixStrength,
  );
  const nicotineShotCount = computed(
    () => nicotineAmount.value / data.value.nicotineShotAmount,
  );

  /**
   * @param {number} newValue
   * @param {string} name
   */
  function updateDataValue(newValue, name) {
    if (!(name in data.value)) {
      console.error(`Invalid property name: ${name}`);
      return;
    }

    data.value[name] = newValue;
  }
</script>
