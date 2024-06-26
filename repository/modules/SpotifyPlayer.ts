
import type { AsyncDataOptions } from '#app';
import type { FetchOptions } from 'ofetch';

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

    const authorization = useLocalStorage('token', '')

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Authorization': `Bearer ${authorization.value}`
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