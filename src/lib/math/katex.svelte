<script>
  import katex from 'katex';
  export let math;
  export let displayMode = false;

  const options = {
    displayMode: displayMode,
    throwOnError: false,
  };

  $: katexString = katex.renderToString(math, options);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
    integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
    crossorigin="anonymous" />
</svelte:head>

{@html katexString}
