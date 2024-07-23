
import type { AsyncDataOptions } from '#app';
import type { FetchOptions } from 'ofetch';

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

// locals
import FetchFactory from '../factory';

type IUser = {
  id: string
}

type IResponse = {
  data: IUser[];
}

class SpotifyPlayerModule extends FetchFactory<IResponse[]> {
  private RESOURCE = '/me/player';

  /**
   * Return state of playback
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getPlaybackState(
    asyncDataOptions?: AsyncDataOptions<IResponse[]>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Authorization': `Bearer ${getHashParams().access_token}`
          }
        };
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default SpotifyPlayerModule;