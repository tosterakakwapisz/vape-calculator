<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md">
      <div class="container">
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
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col">
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
