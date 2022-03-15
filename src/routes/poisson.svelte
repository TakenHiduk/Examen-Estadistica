<script lang="ts">
  import { factorial, Katex } from '$lib/math';

  let m: number = 0;
  let x: number = 0;

  const formulaHypergeometric = `
  f\\left(x\\right)=\\frac
  {\\mu^{x}e^{-\\mu}}
  {x!}`;
  const formulaVariance = `\\mu=var\\left(x\\right)=\\sigma^{2}`;
  const formulaStandardDeviation = `\\sigma^{2}=\\sqrt{\\mu}`;

  const calculatePoisson = () =>
    (Math.pow(m, x) * Math.pow(Math.exp(1), -m)) / factorial(x);

  $: formulaHypergeometricValues = `
  f\\left(x\\right)=\\frac
  {${m}^{${x}}e^{-${m}}}
  {${x}!}=${calculatePoisson()}`;
  $: formulaVarianceValues = `\\mu=${m}`;
  $: formulaStandardDeviationValues = `\\sigma^{2}=\\sqrt{${m}}=${Math.sqrt(
    m,
  )}`;
</script>

<svelte:head>
  <title>Probabilidad y Estadistica - Poisson</title>
</svelte:head>

<div class="wrapper">
  <div class="values">
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">μ</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{m}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">x</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{x}" />
      </label>
    </div>
  </div>
  <div class="results">
    <div>
      <span class="title">Distribucion Hipergeometrica</span>
      <span>
        <Katex math="{formulaHypergeometricValues}" displayMode />
      </span>
      <span class="title">Varianza</span>
      <span>
        <Katex math="{formulaVarianceValues}" displayMode />
      </span>
      <span class="title">Desviacion Estandar</span>
      <span>
        <Katex math="{formulaStandardDeviationValues}" displayMode />
      </span>
    </div>
  </div>
  <div class="formulas">
    <span class="text-xl font-bold">Formulas</span>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Distribucion Hipergeometrica</div>
      <Katex math="{formulaHypergeometric}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Varianza</div>
      <Katex math="{formulaVariance}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Desviacion Estandar</div>
      <Katex math="{formulaStandardDeviation}" displayMode />
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .wrapper {
    @apply w-full h-full;
    @apply grid gap-4;
    grid-template-areas:
      'values formulas'
      'results formulas';
    grid-template-columns: 1fr 350px;
    grid-template-rows: 150px 1fr;
  }

  .formulas {
    @apply bg-base-100;
    @apply rounded-xl shadow-lg w-full h-full;
    @apply p-2;
    grid-area: formulas;
  }

  .values {
    @apply bg-base-100;
    @apply rounded-xl shadow-lg w-full h-full;
    @apply grid grid-cols-2;
    @apply justify-center items-center;
    @apply p-2;
    grid-area: values;
  }

  .results {
    @apply bg-base-100;
    @apply rounded-xl shadow-lg w-full h-full;
    @apply p-2;
    @apply flex flex-col gap-2 justify-center;
    grid-area: results;
  }

  .input {
    @apply w-full;
  }

  .title {
    @apply font-semibold;
  }
</style>
