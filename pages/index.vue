<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>

const config = useRuntimeConfig()

onMounted(() => {
  navigateTo('/home')
  // navigateTo(`https://accounts.spotify.com/authorize?response_type=code&client_id=${config.public.spotifyClientId}&scope=${config.public.spotifyApiScope}&redirect_uri=http://${document.location.host}/home&state=${config.public.spotifyApiState}`, { external: true })
})
</script>

<style>

</style>