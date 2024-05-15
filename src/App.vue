<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">
          <nav class="navbar navbar-expand-md">
            <div class="container px-0">
              <a
                class="navbar-brand"
                href="https://github.com/tosterakakwapisz/"
                target="_blank"
              >
                <img
                  class="img-fluid logo"
                  src="https://github.com/tosterakakwapisz.png"
                  alt="Logo"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink :to="{ name: 'home' }" class="nav-link">
                      Strona główna
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink
                      :to="{ name: 'liquid-mixing' }"
                      class="nav-link"
                    >
                      Mieszanie liquid'u
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <main class="pt-3">
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  .navbar {
    .logo {
      height: 2em;
      border-radius: 100%;
    }
  }
</style>
