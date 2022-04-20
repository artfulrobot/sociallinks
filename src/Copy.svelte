<script>
  export let textToCopy = '';

  let timeout;

  function doCopy() {
    const input = document.createElement('input');
    input.value = textToCopy;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, textToCopy.length); /* For mobile devices */
    document.execCommand("copy");
    document.body.removeChild(input);
    console.log("should have copied ", textToCopy);

    clearTimeout(timeout);
    timeout = setTimeout(() => { timeout = null; }, 1000);
  }
</script>
<a class="copy" title="Copy link to clipboard" href on:click|preventDefault={doCopy}>{#if timeout}Copied!{:else}📋{/if}</a>
