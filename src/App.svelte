<script>
  import Copy from './Copy.svelte';

  export let
    tweet = '',
    twitterAt = '',
    primaryLink = '',
    emailSubject = '',
    emailBody = '',
    waText= ''
  ;
  let
    twitterOutput,
    twitterErrors,
    facebookErrors,
    facebookOutput,
    whatsappOutput,
    whatsappErrors,
    emailOutput,
    emailErrors,
    urlSafeLink,
    warnings
    ;
  $: {
    urlSafeLink = encodeURIComponent(primaryLink);
    twitterErrors = [];
    facebookErrors = [];
    whatsappErrors = [];
    emailErrors = [];
    warnings = [];
    emailOutput = '';
    facebookOutput = '';
    whatsappOutput = '';
    emailOutput = '';

    if (!primaryLink.match(/^https:\/\/./)) {
      twitterErrors.push("Need link");
      facebookErrors.push("Need link");
      whatsappErrors.push("Need link");
    }

    // Twitter
    if (!tweet) {
      twitterErrors.push("Need tweet text");
    }
    let tweetContent = tweet;
    if (tweetContent.length > 280) {
      twitterErrors.push(`Tweet is ${tweetContent - 280} characters too long.`);
    }
    if (twitterAt && !twitterAt.match(/^@?[a-zA-Z0-9_]+$/)) {
      twitterErrors.push("Username invalid.");
    }
    twitterOutput = (twitterErrors.length === 0)
      ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${urlSafeLink}`
      + (twitterAt.match(/^@?[a-zA-Z0-9_]+$/) ? '&via=' + encodeURIComponent(twitterAt.replace(/^@/, '')) : '')
      : null;

    if (!waText) {
      whatsappErrors.push("Need WhatsApp text");
    }

    facebookOutput = facebookErrors.length === 0 ? `https://facebook.com/sharer/sharer.php?u=${urlSafeLink}` : null;
    whatsappOutput = whatsappErrors.length === 0 ? `whatsapp://send?text=${encodeURIComponent(waText + ' ' + primaryLink)}` : null;

    if (!emailSubject) {
      emailErrors.push("Need email subject");
    }
    if (!emailBody) {
      emailErrors.push("Need short email body");
    }
    if (emailBody.indexOf(primaryLink) === -1) {
      warnings.push("Link is not included in email body.");
    }
    if (emailErrors.length === 0) {
      emailOutput = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }

    // Save in localStorage.
    localStorage.setItem('config', JSON.stringify({
      primaryLink, tweet, twitterAt, waText, emailSubject, emailBody
    }));
  };


</script>

<style lang=scss>
  .sl-app {
    margin: 2rem auto;
    max-width: 120ch;
    padding: 2rem;
    background: white;
    font-family: Lato, sans-serif;
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    h1 { flex: 0 0 100%;}
    form { flex: 1 0 50ch; padding: 2rem; }
    .outputs { flex: 1 0 50ch;padding: 2rem;  }
  }
  p.smallprint {
    font-size: 0.875rem;
    color: #444;
    margin: 0;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-family: Lato, sans-serif;
    font-weight: lighter;
    font-size: 2rem;
    color: #1577d9;
  }
  h2 {
    font-size: 1rem;
    color: #555;
    margin: 0 0 0.5rem;
    font-family: Lato, sans-serif;
    font-weight: normal;
  }
  ul.errors {
    color: #a00;
  }
  ul.warnings {
    color: #a80;
  }

  .form-item {
    label { display: block; color: #1577d9; }
    input, textarea {
      width: 100%;
      padding: 0.5ch 1ch;
      border: solid 1px #ebf5ff;
      background: #ebf5ff ;
      margin: 0 0 1rem;
      border-radius: 5px;
    }
  }
  .output {
    margin-bottom: 1rem;

  }

  a.button {
    background: #1577d9;
    width: 12ch;
    margin-right: 1.4ch;
    color: white;
    text-align: center;
    padding: 0.5ch 1ch;
    border: none;
    display: inline-block;
    border-radius: 5px;
    text-decoration: none;

    &:hover, &:active {
      text-decoration: none;
      background-color: #0764c1;
    }
  }

</style>

<div class="sl-app">
  <h1>Social Links generator</h1>

  <form>
    <div class="form-item">
      <label for="the-link">Primary Link URL</label>
      <input type=url id="the-link" bind:value={primaryLink} />
    </div>

    <div class="form-item">
      <label for="twitter-tweet">Tweet text</label>
      <textarea rows=5 id="twitter-tweet" bind:value={tweet} ></textarea>
    </div>
    <div class="form-item">
      <label for="twitter-at">Twitter @account (without the @)</label>
      <input type=text id="twitter-at" bind:value={twitterAt} />
    </div>

    <div class="form-item">
      <label for="wa-text">WhatsApp text</label>
      <textarea rows=5 id="wa-text" bind:value={waText} ></textarea>
    </div>

    <div class="form-item">
      <label for="email-subject-text">Email subject</label>
      <input type=text id="email-subject-text" bind:value={emailSubject} />
    </div>

    <div class="form-item">
      <label for="email-body">Email body (plain text only! Keep it short.)</label>
      <textarea rows=5 id="email-body" bind:value={emailBody} ></textarea>
    </div>
  </form>

  <div class="outputs">
    <div class="output">
      <h2>Twitter</h2>
      {#if twitterOutput}
        <a class="button" href={twitterOutput} target="_blank" title="Tweet" >Tweet</a> <Copy textToCopy={twitterOutput} />
      {:else}
        <ul class="errors">
          {#each twitterErrors as error}
            <li>{error}</li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="output">
      <h2>Facebook</h2>
      {#if facebookOutput}
        <a class="button" href={facebookOutput} target="_blank" title="Share on Facebook" >Facebook</a> <Copy textToCopy={facebookOutput} />
      {:else}
        <ul class="errors">
          {#each facebookErrors as error}
            <li>{error}</li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="output">
      <h2>WhatsApp</h2>
      {#if whatsappOutput}
        <a class="button" href={whatsappOutput} target="_blank" title="Share on whatsapp" >WhatsApp</a>  <Copy textToCopy={whatsappOutput} />
        <p class="smallprint">(note: only works on a device with WhatsApp installed)</p>
      {:else}
        <ul class="errors">
          {#each whatsappErrors as error}
            <li>{error}</li>
          {/each}
        </ul>
      {/if}
    </div>

    <div class="output">
      <h2>Email</h2>
      {#if emailOutput}
        <a class="button" href={emailOutput} target="_blank" title="Share by Email" >Email</a>  <Copy textToCopy={emailOutput} />
      {:else}
        <ul class="errors">
          {#each emailErrors as error}
            <li>{error}</li>
          {/each}
        </ul>
      {/if}
    </div>

    {#if warnings.length}
    <div class="output">
      <h2>Warnings</h2>
      <ul class="warnings">
        {#each warnings as error}
          <li>{error}</li>
        {/each}
      </ul>
    </div>
    {/if}

  </div>

</div>
