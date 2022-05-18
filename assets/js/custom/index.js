import Splide from '@splidejs/splide';

new Splide('.splide', {
  gap: '2rem',
  keyboard: true,
}).mount();

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}