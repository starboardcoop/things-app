<script>
  import { goto } from '@sapper/app';
  import Error from '../../components/Error.svelte';
  import TextInput from '../../components/TextInput.svelte';
  import Session from '../../session';

  let invalid = false;
  let codeText = "";
  let errorMessage;

  const reset = () => invalid = false;

  async function submit() {
      if (codeText.length != 6) {
          invalid = true;
          errorMessage = "Invalid code.";
          return new Promise(() => {});
      }

      const session = Session.json();

      const result = await fetch("/.netlify/functions/auth-code", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({ phone: session.phone, code: codeText })
      });

      const { member, token, error } = await result.json();
      if (error) {
        invalid = true;
        errorMessage = error;
        return new Promise(() => {});
      }

      session.member = member;
      session.token = token;

      Session.update(session);
  
      if (member)
        goto('/home');
      else
        goto('/sign-up');
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
</style>

<Error {errorMessage} visible={errorMessage}/>
<div class="w-full h-full flex flex-col justify-center items-center p-8">
  <div class="flex flex-row gap-4 flex-wrap">
    <TextInput
      bind:value={codeText}
      bind:invalid={invalid}
      on:change={reset}
      on:enter={submit}
      type="password"
      placeholder="00000"
      pattern="[0-9]{5}"
    />
    <button on:click={submit} class="bg-yellow-300 px-4 py-2 border-2 border-black solid rounded-md uppercase font-bold transform hover:scale-105 duration-200">Sign in</button>
  </div>
</div>