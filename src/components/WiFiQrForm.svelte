<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="protocol">Protocol</label>
    <input name="protocol" id="protocol" type="text" bind:value={protocol}>
  </div>
  <div class="form-group">
    <label for="name">Network name</label>
    <input name="name" id="name" type="text" bind:value={name}>
  </div>
  <div class="form-group">
    <label for="password">Network password</label>
    <input password="password" id="password" type="text" bind:value={password}>
  </div>
  <button type="submit">Get QR code</button>
</form>

<script>
  import { createEventDispatcher } from 'svelte';

  let protocol = '';
  let name = '';
  let password = '';

  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    const result = await fetch('api/wifi', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ protocol, name, password }),
    });
    const { svg } = await result.json();

    dispatch('success', { svg });
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    align-self: flex-end;
    border-color: var(--main-color);
    background-color: var(--main-color);
    padding: 10px 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
  }

  .form-group:not(:first-of-type) {
    margin-top: 15px;
  }

  .form-group:last-of-type {
    margin-bottom: 25px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    font-size: 20px;
    border: 1px solid lightgrey;
    transition: border-color 0.2s ease-in-out;
    border-radius: 4px;
  }

  input:hover {
    border-color: grey;
  }

  input:focus {
    outline: none;
    border-color: grey;
  }
</style>
