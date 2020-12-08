<script>
    import { goto } from '@sapper/app';
    import Session from '../../session';
  
    let invalid = false;
    let codeText = "";

    const reset = () => invalid = false;
  
    async function submit() {
      if (codeText.length != 5)
      {
        invalid = true;
        console.log('Invalid code.');
        return new Promise(() => {});
      }

      console.log(`Sending code: ${codeText}`);
  
      const session = Session.json();
      session.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      Session.update(session);
  
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
          bind:value={codeText}
          on:change={reset}
          type="password"
          placeholder="00000"
          pattern="[0-9]{5}"
          class:invalid
          class="px-4 py-2 border-2 border-black solid rounded-md outline-none transform hover:scale-105 duration-200" />
        <button on:click={submit} class="bg-yellow-300 px-4 py-2 border-2 border-black solid rounded-md uppercase font-bold transform hover:scale-105 duration-200">Sign in</button>
      </div>
    </div>
  </main>
  