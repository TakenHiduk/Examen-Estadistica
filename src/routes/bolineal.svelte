<script lang="ts">
  import { Katex, factorial, reduce, choose } from '$lib/math';

  let n: number = 0;
  let r: number = 0;
  let p: number = 0;
  let fn: number = 0;
  let fd: number = 0;

  const fractionToPercentage = () => (p = Number(((fn / fd) * 100).toFixed(2)));

  const percentToFraction = () => {
    const a = reduce(p, 100);
    fn = a.numerator;
    fd = a.denominator;
  };

  const formulaBolineal = `\\left(\\begin{array}{c}n\\\\ r\\end{array}\\right)=\\frac{n!}{r!\\left(n-r\\right)!}`;
  const formulaProbabilityOf = `pb=p^{r}\\left(1-p\\right)^{\\left(n-r\\right)}`;
  const formulaBolinealProbability = `f\\left(x\\right)=\\left(\\begin{array}{c}n\\\\ r\\end{array}\\right)*pb`;
  const formulaExpectedValue = `E\\left(x\\right)=\\left(\\begin{array}{c}n\\\\ r\\end{array}\\right)*p`;
  const formulaVariance = `var\\left(x\\right)=\\left(\\begin{array}{c}n\\\\ r\\end{array}\\right)*p*\\left(1-p\\right)`;
  const formulaStandardDeviation = `\\sigma^{2}=\\sqrt{f\\left(x\\right)}`;

  const calculateProbabilityOf = () =>
    Math.pow(p / 100, r) * Math.pow(1 - p / 100, n - r);
  const calculateBolinealProbability = () =>
    choose(n, r) * Math.pow(p / 100, r) * Math.pow(1 - p / 100, n - r);
  const calculateExpectedValue = () => choose(n, r) * (p / 100);

  $: formulaBolinealValues = `\\left(\\begin{array}{c}${n}\\\\ ${r}\\end{array}\\right)=\\frac{${n}!}{${r}!\\left(${n}-${r}\\right)!} = ${choose(
    n,
    r,
  )}`;
  $: formulaProbabilityOfValues = `pb=${p / 100}^{${r}}\\left(1-${
    p / 100
  }\\right)^{\\left(${n}-${r}\\right)}=${calculateProbabilityOf()}`;
  $: formulaBolinealProbabilityValues = `f\\left(x\\right)=\\left(\\begin{array}{c}${n}\\\\ ${r}\\end{array}\\right) * ${
    Math.pow(p / 100, r) * Math.pow(1 - p / 100, n - r)
  } = ${calculateBolinealProbability()}`;
  $: formulaExpectedValueValues = `E\\left(x\\right)=${
    factorial(n) / (factorial(r) * factorial(n - r))
  }*${p / 100}=${calculateExpectedValue()}`;
  $: formulaVarianceValues = `var\\left(x\\right)=${
    factorial(n) / (factorial(r) * factorial(n - r))
  }*${p / 100}*${1 - p / 100}=${choose(n, r) * (p / 100) * (1 - p / 100)}`;
  $: formulaStandardDeviationValues = `\\sigma = \\sqrt{${
    choose(n, r) * (p / 100) * (1 - p / 100)
  }}=${Math.sqrt(choose(n, r) * (p / 100) * (1 - p / 100))}`;
</script>

<svelte:head>
  <title>Probabilidad y Estadistica - Bolineal</title>
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
          bind:value="{n}" />
      </label>
    </div>

    <div class="form-control input">
      <label class="input-group input-group-md">
        <span class="font-semibold">R</span>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-md"
          bind:value="{r}" />
      </label>
    </div>

    <div class="flex justify-center items-center">
      <div class="radial-progress" style="--value:{p};">{p}%</div>
    </div>

    <div class="flex gap-2">
      <div class="form-control w-full justify-center items-center">
        <label class="input-group input-group-md">
          <span class="font-semibold">P</span>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered input-md"
            bind:value="{p}"
            on:input="{percentToFraction}" />
        </label>
      </div>
      <div class="flex flex-col gap-2">
        <div class="form-control input">
          <label class="input-group input-group-md">
            <span class="font-semibold">P</span>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered input-md"
              bind:value="{fn}"
              on:input="{fractionToPercentage}" />
          </label>
        </div>
        <div class="divider"></div>
        <div class="form-control input">
          <label class="input-group input-group-md">
            <span class="font-semibold">P</span>
            <input
              type="number"
              placeholder="Type here"
              class="input input-bordered input-md"
              bind:value="{fd}"
              on:input="{fractionToPercentage}" />
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="results">
    <div>
      <span class="title">Distribucion Bolineal</span>
      <span>
        <Katex math="{formulaBolinealValues}" displayMode />
      </span>
      <span class="title">
        Probabilidad de cada evento en el que hay R exitos en N ensayos es
      </span>
      <span>
        <Katex math="{formulaProbabilityOfValues}" displayMode />
      </span>
      <span class="title"> Funcion de probabilidad bolineal </span>
      <span>
        <Katex math="{formulaBolinealProbabilityValues}" displayMode />
      </span>
      <span class="title"> Valor Esperado </span>
      <span>
        <Katex math="{formulaExpectedValueValues}" displayMode />
      </span>
      <span class="title"> Varianza </span>
      <span>
        <Katex math="{formulaVarianceValues}" displayMode />
      </span>
      <span class="title"> Desviacion Estandar </span>
      <span>
        <Katex math="{formulaStandardDeviationValues}" displayMode />
      </span>
    </div>
  </div>
  <div class="formulas overflow-auto">
    <span class="text-xl font-bold">Formulas</span>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Distribucion Bolineal</div>
      <Katex math="{formulaBolineal}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">
        Probabilidad de cada evento en el que hay R exitos en N ensayos es
      </div>
      <Katex math="{formulaProbabilityOf}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">
        Funcion de probabilidad bolineal
      </div>
      <Katex math="{formulaBolinealProbability}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="flex gap-2 font-semibold">Valor Esperado</div>
      <Katex math="{formulaExpectedValue}" displayMode />
    </div>
    <div class="flex flex-col gap-2 mt-2 overflow-auto">
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
    grid-template-columns: 1fr 270px;
    grid-template-rows: 250px 1fr;
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
