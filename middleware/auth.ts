export default defineNuxtRouteMiddleware((to, from) => {

  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  // isAuthenticated() is an example method verifying if a user is authenticated
  if (!getHashParams().access_token) {
    return navigateTo('/')
  }
})