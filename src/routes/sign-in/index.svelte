<script>
  import { goto } from '@sapper/app';
  import Session from '../../session';
  import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'

  let invalid = false;
  let phoneText = "";

  function formatPhoneText() {
    if (phoneText.length > 6)
      phoneText = new AsYouType('US').input(phoneText);
    invalid = false;
  }

  async function submit() {
    const phone = parsePhoneNumberFromString(phoneText, 'US');

    if (phone == null || !phone.isValid())
    {
      invalid = true;
      console.log('Invalid phone number.');
      return new Promise(() => {});
    }

    invalid = false;

    const result = await fetch("/.netlify/functions/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ phone: phone.nationalNumber })
    });

    const data = await result.json();
    console.log(`Hi, ${data.name}!`);

    Session.update({ name: data.name, phone: phone.nationalNumber });

    goto("/sign-in/code");
  }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
  <div class="w-full h-full flex flex-col justify-center items-center p-8">
    <div class="flex flex-row gap-4 flex-wrap">
      <input
        bind:value={phoneText}
        on:change={formatPhoneText}
        on:input={formatPhoneText}
        type="tel"
        placeholder="(401) 555-5555"
        pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
        class:invalid
        class="px-4 py-2 brutal hovers outline-none" />
      <button on:click={submit} class="bg-yellow-300 px-4 py-2 brutal hovers uppercase font-bold">Submit</button>
    </div>
  </div>
</main>

<style>
  .invalid {
    @apply bg-red-200;
  }
</style>