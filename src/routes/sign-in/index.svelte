<script>
  import { goto } from '@sapper/app';
  import Session from '../../session';
  import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js';
  import TextInput from '../../components/TextInput.svelte';

  let phoneText = "";
  let invalid = false;

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
      body: JSON.stringify({ phone: phone.number })
    });

    const data = await result.json();
    console.log(`Hi, ${data.name}!`);

    Session.update({ name: data.name, phone: phone.number });

    goto("/sign-in/code");
  }

  function triggerSubmit(event) {
    if (event.key === 'Enter')
      submit();
  }
</script>

<div class="w-full h-full flex flex-col justify-center items-center p-8">
  <div class="flex flex-row gap-4 flex-wrap">
    <TextInput
      bind:value={phoneText}
      bind:invalid={invalid}
      on:change={formatPhoneText}
      on:input={formatPhoneText}
      on:keyup={triggerSubmit}
      type="tel"
      placeholder="(401) 555-5555"
      pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
    />
    <button on:click={submit} class="bg-yellow-300 px-4 py-2 brutal hovers uppercase font-bold">Submit</button>
  </div>
</div>