// console.log("test presmerovani 5000");
const redirectTo = document.querySelector<HTMLElement>("[data-js-redirect]");
// console.log(redirectTo?.dataset.jsRedirect);

setTimeout(() => {
  // console.log("ted presmerovat");
  window.location.href = redirectTo?.dataset.jsRedirect!;
}, 7000);
