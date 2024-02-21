import "bootstrap";
import "../scss/style.scss";

const INPUT_REGEX = /\d+/;
const CALCULATE_FORM_ID = "calculate",
  RESULTS_EL_ID = "results",
  BOTTLE_INPUT_ID = "input_bottle",
  STRENGTH_INPUT_ID = "input_strength",
  NICOTINE_SHOT_INPUT_ID = "input_nicotine_shot";

window.onload = () => {
  document
    .getElementById(CALCULATE_FORM_ID)
    ?.addEventListener("submit", onSubmit);
};

/**
 * Handles submit event when user wants to calculate the data.
 *
 * @param {SubmitEvent} event
 */
function onSubmit(event) {
  event.preventDefault();

  /** @type {HTMLFormElement} */
  let target = event.currentTarget,
    /** @type {HTMLInputElement} */
    inputBottle = target.querySelector(`#${BOTTLE_INPUT_ID}`),
    /** @type {HTMLInputElement} */
    inputStrength = target.querySelector(`#${STRENGTH_INPUT_ID}`),
    /** @type {HTMLInputElement} */
    inputNicotineShot = target.querySelector(`#${NICOTINE_SHOT_INPUT_ID}`);

  let bottleVolume = parseInt(inputBottle.value),
    nicotineStrength = parseInt(inputStrength.value),
    nicotineShot = parseInt(inputNicotineShot.value);

  if (!(INPUT_REGEX.test(bottleVolume) && INPUT_REGEX.test(nicotineStrength))) {
    return null;
  }

  let resultsElement = document.getElementById(RESULTS_EL_ID);
  if (!resultsElement) return;

  let calculatedNicotineAmount = calculateNicotineAmount(
    bottleVolume,
    nicotineStrength,
  );

  resultsElement.innerText = `Aby otrzymać ${nicotineStrength} [mg/ml] w butelce ${bottleVolume} [ml], trzeba dodać do butelki ${calculatedNicotineAmount} [mg] nikotyny`;
}

/**
 * Calculates how much nicotine needs to be in a bottle to achieve desired nicotineStrength.
 *
 * @param {number} bottleVolume Bottle volume in [ml]
 * @param {number} nicotineStrength Desired nicotine strength in [mg/ml]
 *
 * @returns {?number} [mg] of nicotine needed to achieve desired strength; null on error
 */
function calculateNicotineAmount(bottleVolume, nicotineStrength) {
  return bottleVolume * nicotineStrength;
}
