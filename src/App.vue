<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <RouterLink to="/">Go to Home</RouterLink>
      </div>
      <div class="col">
        <RouterLink to="/about">Go to About</RouterLink>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 mt-4">
        <h1 class="text-center">Vape calculator</h1>

        <p>
          This tool will make Your life easier when trying to figure out how
          much nicotine do You need for certain bottle volume and more :D
        </p>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-8 offset-2">
        <form id="calculate">
          <div class="row">
            <div class="col-4">
              <label for="input_bottle" class="form-label">
                Butelka (ml)
              </label>
              <input type="text" class="form-control" id="input_bottle" />
            </div>
            <div class="col-4">
              <label for="input_strength" class="form-label">
                Moc liquid'u (mg/ml)
              </label>
              <input type="text" class="form-control" id="input_strength" />
            </div>
            <div class="col-4">
              <label for="input_nicotine_shot" class="form-label">
                Nikotyna w szocie (mg)
              </label>
              <input
                type="text"
                class="form-control"
                id="input_nicotine_shot"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center mt-4">
              <button type="submit" class="btn btn-primary">Oblicz</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-6 offset-3">
        <h3 class="text-center">Wyniki:</h3>

        <p id="results">some results</p>
      </div>
    </div>
  </div>
</template>
