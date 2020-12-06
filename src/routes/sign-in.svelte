<script>
  import { goto } from '@sapper/app';
  import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'

  let invalid = false;
  let phoneText = "";

  function formatPhoneText() {
    phoneText = new AsYouType('US').input(phoneText);
    invalid = false;
  }

  async function submit() {
    const phone = parsePhoneNumberFromString(phoneText, 'US');

    if (!phone.isValid())
    {
      invalid = true;
      console.log('Invalid phone number.');
      return new Promise(() => {});
    }

    invalid = false;

    const result = await fetch('/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ phone: phone.nationalNumber })
    });

    const data = await result.json();
    console.log(`Hi, ${data.name}!`);

    localStorage.setItem('session', JSON.stringify({ name: data.name }));

    goto('/home');
  }
</script>

<style>
  .solid {
    box-shadow: 2px 2px 0 #000000;
  }

  .solid:focus,
  .solid:hover {
    box-shadow: 4px 4px 0 #000000;
  }

  .invalid {
    @apply bg-red-200;
  }
</style>

<main class="bg-indigo-300 w-screen h-screen font-mono">
  <div class="w-full h-full flex flex-col justify-center items-center p-8">
    <div class="flex flex-row gap-4 flex-wrap">
      <input
        bind:value={phoneText}
        on:change={formatPhoneText}
        type="tel"
        placeholder="(401) 555-5555"
        pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
        class:invalid
        class="px-4 py-2 border-2 border-black solid rounded-md outline-none transform hover:scale-105 duration-200" />
      <button on:click={submit} class="bg-yellow-300 px-4 py-2 border-2 border-black solid rounded-md uppercase font-bold transform hover:scale-105 duration-200">Submit</button>
    </div>
  </div>
</main>
