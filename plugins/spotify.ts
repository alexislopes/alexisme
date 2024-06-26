// [File]: plugins/api.ts

// 3rd's
import { $fetch, type FetchOptions } from 'ofetch';

// locals
import SpotifyAccountModule from '~/repository/modules/SpotifyAccount';
import SpotifyPlayerModule from '~/repository/modules/SpotifyPlayer';

interface IApiInstance {
  spotifyPlayer: SpotifyPlayerModule;
  spotifyAccount: SpotifyAccountModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptionsAccount: FetchOptions = {
    baseURL: config.public.spotifyAccountBaseUrl
  };

  const fetchOptions: FetchOptions = {
    baseURL: config.public.spotifyApiBaseUrl
  };

  // Create a new instance of $fecther with custom option
  const apiFectherAccount = $fetch.create(fetchOptionsAccount);
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    spotifyAccount: new SpotifyAccountModule(apiFectherAccount),
    spotifyPlayer: new SpotifyPlayerModule(apiFecther)
  };

  return {
    provide: {
      spotify: modules
    }
  };
});