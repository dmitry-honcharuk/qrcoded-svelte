{#if url}
  <img src={url} alt="qr-code">
{/if}

{#if string}
  <pre>{string}</pre>
{/if}

{#if svg}
  <span class="svg">
    {@html svg}
  </span>
{/if}

<script>
  let url, string, svg, width = 300;

  export { url, string, svg, width };
</script>

<style>
  img {
    width: 50%;
  }

  .svg {
    width: 400px;
    display: inline-block;
  }

  pre {
    font-size: 20px;
    line-height: 20px;
    display: inline-block;
  }
</style>
