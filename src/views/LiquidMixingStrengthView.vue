<template>
  <div class="row">
    <div class="col">
      <h1>Moc liquid'u</h1>
      <p class="pt-2">
        Oblicz moc liquid'u przy dolaniu podanej ilości nikotyny do butelki.
        <br />
        Wymagane dane:
      </p>
      <ul>
        <li>pojemność butelki [ml]</li>
        <li>ilość nikotyny w szocie [mg]</li>
        <li>liczba szotów</li>
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
            v-model:input-value="data.bottleVolume"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <LiquidInputField
            id="nicotineShotAmount"
            description="Ilość nikotyny w szocie [mg]"
            v-model:input-value="data.nicotineShotAmount"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <LiquidInputField
            id="nicotineShotCount"
            description="Ilość szotów"
            v-model:input-value="data.nicotineShotCount"
          ></LiquidInputField>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">Moc liquid'u: {{ liquidStrength }}mg/ml</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import LiquidInputField from "@/components/LiquidInputField.vue";
  import { computed, ref } from "vue";

  const data = ref({
    bottleVolume: 150,
    nicotineShotAmount: 200,
    nicotineShotCount: 3,
  });

  const liquidStrength = computed(() => {
    let strength =
      (data.value.nicotineShotAmount * data.value.nicotineShotCount) /
      data.value.bottleVolume;

    return strength.toFixed(2);
  });
</script>
