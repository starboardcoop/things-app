<script>
  import { goto } from '@sapper/app';
  import Session from '../../session';
  import Phone from '../../lib/phone';
  import TextInput from '../../components/TextInput.svelte';

  let phoneText = "";
  let invalid = false;

  function formatPhoneText() {
    phoneText = Phone.formatted(phoneText);
    invalid = false;
  }

  async function submit() {
    const phone = new Phone(phoneText);
    invalid = !phone.isValid();

    if (invalid) {
      console.log('Invalid phone number.');
      return new Promise(() => {});
    } else {
      const result = await fetch("/.netlify/functions/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ phone: phone.asNumber() })
      });

      const data = await result.json();
      console.log(`Hi, ${data.name}!`);

      Session.update({ name: data.name, phone: phone.asNumber() });

      goto("/sign-in/code");
    }
  }
</script>

<div class="w-full h-full flex flex-col justify-center items-center p-8">
  <div class="flex flex-row gap-4 flex-wrap">
    <TextInput
      bind:value={phoneText}
      bind:invalid={invalid}
      on:change={formatPhoneText}
      on:input={formatPhoneText}
      on:enter={submit}
      type="tel"
      placeholder="(401) 555-5555"
      pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
    />
    <button on:click={submit} class="bg-yellow-300 px-4 py-2 brutal hovers uppercase font-bold">Submit</button>
  </div>
</div>