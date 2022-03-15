<script lang="ts">
  import { Katex } from '$lib/math';

  let a: number = 0;
  let b: number = 0;
  let c: number = 0;
  let d: number = 0;

  const formulaUniforme = `p\\left(c\\leq x\\leq d\\right)=\\frac{d - c}{b-a}`;
  const formulaVariance = `var\\left(x\\right)=\\frac{\\left(b - a \\right)^{2}}{12}`;
  const formulaExpectedValue = `E\\left(x\\right)=\\frac{a - b}{2}`;
  const formulaStandarDerivation = `\\sigma^{2}=\\sqrt{var\\left(x\\right)}`;

  const calculateUniforme = () => (d - c) / (b - a);
  const calculateVariance = () => Math.pow(b - a, 2) / 12;
  const calculateExpectedValue = () => (a + b) / 2;
  const calculateStandardDeviation = () => Math.sqrt(Math.pow(b - a, 2) / 12);

  $: formulaUniformeValues = `p\\left(${c}\\leq x\\leq ${d}\\right)=\\frac{${d} - ${c}}{${b} - ${a}} = ${calculateUniforme()}`;
  $: formulaVarianceValues = `var\\left(x\\right)=\\frac{\\left(${b} - ${a} \\right)^{2}}{12} = ${calculateVariance()}`;
  $: formulaExpectedValueValues = `E\\left(x\\right)=\\frac{${a} - ${b}}{2} = ${calculateExpectedValue()}`;
  $: formulaStandarDerivationValues = `\\sigma^{2}=\\sqrt{${
    Math.pow(b - a, 2) / 12
  }} = ${calculateStandardDeviation()}`;
</script>

<svelte:head>
  <title>Probabilidad y Estadistica - Uniforme</title>
</svelte:head>

<div class="wrapper">
  <div class="values">
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">A</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{a}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">B</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{b}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">C</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{c}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">D</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{d}" />
      </label>
    </div>
  </div>
  <div class="results">
    <div>
      <span class="title">Distribucion Uniforme</span>
      <span>
        <Katex math="{formulaUniformeValues}" displayMode />
      </span>
    </div>
    <div>
      <span class="title">Varianza</span>
      <span>
        <Katex math="{formulaVarianceValues}" displayMode />
      </span>
    </div>
    <div>
      <span class="title">Valor Esperado</span>
      <span>
        <Katex math="{formulaExpectedValueValues}" displayMode />
      </span>
    </div>
    <div>
      <span class="title">Desviacion Estandar</span>
      <span>
        <Katex math="{formulaStandarDerivationValues}" displayMode />
      </span>
    </div>
  </div>
  <div class="formulas">
    <span class="text-xl font-bold">Formulas</span>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Distribucion Uniforme</div>
      <Katex math="{formulaUniforme}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Varianza</div>
      <Katex math="{formulaVariance}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Valor Esperado</div>
      <Katex math="{formulaExpectedValue}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Desviacion Estandar</div>
      <Katex math="{formulaStandarDerivation}" displayMode />
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
    grid-template-columns: 1fr 250px;
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
