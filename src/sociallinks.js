import App from './App.svelte';
document.addEventListener('DOMContentLoaded', () => {

  var saved = localStorage.getItem('config');
  saved = saved ? JSON.parse(saved) : {};
  const target = document.getElementById('sociallinks');
  if (target) {
    target.innerHTML = '';
  }
  else {
    console.error("Missing <div id=\"sociallinks\"></div> on page");
  }

  const app = new App({
    target: document.getElementById('sociallinks'),
    props: saved
  });
});
