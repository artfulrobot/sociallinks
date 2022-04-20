import App from './App.svelte';
document.addEventListener('DOMContentLoaded', () => {

  var saved = localStorage.getItem('config');
  saved = saved ? JSON.parse(saved) : {};

  const app = new App({
    target: document.getElementById('sociallinks'),
    props: saved
  });
});
