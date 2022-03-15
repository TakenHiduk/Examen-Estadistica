<script lang="ts">
  import { choose, Katex } from '$lib/math';

  let N: number = 0;
  let n: number = 0;
  let r: number = 0;
  let x: number = 0;

  const formulaHypergeometric = `
  f\\left(x\\right)=\\frac
  {
    \\left(\\begin{array}{c}r\\\\ x\\end{array}\\right)
    \\left(\\begin{array}{c}N-r\\\\ n-x\\end{array}\\right)
  }
  {
    \\left(\\begin{array}{c}N\\\\ n\\end{array}\\right)
  }`;
  const formulaVariance = `
  var\\left(x\\right) =
  n
  \\left(\\frac{r}{N}\\right)
  \\left(1-\\frac{r}{N}\\right)
  \\left(\\frac{N-n}{N-1}\\right)`;
  const formulaExpectedValue = `E\\left(x\\right)=n\\left(\\frac{r}{N}\\right)`;
  const formulaStandarDesviation = `\\sigma^{2}=\\sqrt{var\\left(x\\right)}`;

  const calculateHypergeometric = () =>
    (choose(r, x) * choose(N - r, n - x)) / choose(N, n);
  const calculateVariance = () =>
    n * (r / N) * (1 - r / N) * ((N - n) / (N - 1));
  const calculateExpectedValue = () => n * (r / N);

  $: formulaHypergeometricValues = `
  f\\left(x\\right)=\\frac
  {
    \\left(\\begin{array}{c}${r}\\\\ ${x}\\end{array}\\right)
    \\left(\\begin{array}{c}${N}-${r}\\\\ ${n}-${x}\\end{array}\\right)
  }
  {
    \\left(\\begin{array}{c}${N}\\\\ ${n}\\end{array}\\right)
  }=${calculateHypergeometric()}`;
  $: formulaVarianceValues = `
  var\\left(x\\right) =
  ${n}
  \\left(\\frac{${r}}{${N}}\\right)
  \\left(1-\\frac{${r}}{${N}}\\right)
  \\left(\\frac{${N}-${n}}{${N}-1}\\right)
  =${calculateVariance()}`;
  $: formulaExpectedValueValues = `E\\left(x\\right)=${n}\\left(\\frac{${r}}{${N}}\\right)
  =${calculateExpectedValue()}`;
  $: formulaStandarDesviationValues = `\\sigma^{2}=\\sqrt{${
    n * (r / N) * (1 - r / N) * ((N - n) / (N - 1))
  }}=${Math.sqrt(calculateVariance())}`;
</script>

<svelte:head>
  <title>Probabilidad y Estadistica - Hipergeometrica</title>
</svelte:head>

<div class="wrapper">
  <div class="values">
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">N</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{N}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">n</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{n}" />
      </label>
    </div>
    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">r</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{r}" />
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
      <span class="title">Valor Esperado</span>
      <span>
        <Katex math="{formulaExpectedValueValues}" displayMode />
      </span>
      <span class="title">Desviacion Estandar</span>
      <span>
        <Katex math="{formulaStandarDesviationValues}" displayMode />
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
      <div class="flex gap-2 font-semibold">Valor Esperado</div>
      <Katex math="{formulaExpectedValue}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Desviacion estandar</div>
      <Katex math="{formulaStandarDesviation}" displayMode />
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
