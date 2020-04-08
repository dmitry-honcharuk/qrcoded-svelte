<svelte:head>
  <title>Get Wi-Fi QR code</title>
</svelte:head>

{#if svg}
  <QrCodeImage {svg} />
{:else}
  <WiFiQrForm on:success={handleSuccess} />
{/if}

<script>
  import WiFiQrForm from '../components/WiFiQrForm.svelte';
  import QrCodeImage from '../components/QrCodeImage.svelte';

  let svg;

  function handleSuccess({ detail }) {
    svg = detail.svg;
  }
</script>
