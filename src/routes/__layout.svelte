<script lang="ts">
  import '../app.css';
  import { goto } from '$app/navigation';
</script>

<div class="wrapper">
  <div class="nav">
    <button class="btn btn-ghost normal-case text-xl font-bold">
      Equipo 3
    </button>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <button class="btn btn-ghost" on:click="{() => goto('/uniforme')}">
            Uniforme
          </button>
        </li>
        <li>
          <button class="btn btn-ghost" on:click="{() => goto('/bolineal')}">
            Bolineal
          </button>
        </li>
        <li>
          <button
            class="btn btn-ghost"
            on:click="{() => goto('/hipergeometrica')}">
            Hipergeometrica
          </button>
        </li>
        <li>
          <button class="btn btn-ghost" on:click="{() => goto('/poisson')}">
            Poisson
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss" scoped>
  .wrapper {
    @apply w-screen h-screen;
    @apply justify-center;
    @apply bg-base-300;
    @apply grid grid-cols-1 grid-rows-[80px,1fr];
    @apply gap-4 p-4;
  }

  .nav {
    @apply col-span-2;
    @apply bg-base-100;
    @apply flex justify-between items-center px-2;
    @apply rounded-xl;
    @apply shadow-lg;
  }

  .content {
    @apply rounded-xl;
  }
</style>
