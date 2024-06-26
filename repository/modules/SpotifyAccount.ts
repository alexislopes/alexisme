
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

class SpotifyAccountModule extends FetchFactory<IResponse[]> {
  private RESOURCE = '/api';


  /**
   * Return authorization code
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async token(
    form: FormData,
    asyncDataOptions?: AsyncDataOptions<IResponse[]>
  ) {


    const config = useRuntimeConfig()

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Authorization": `Basic ${config.public.spotifyAuthorizationCode}`
          }
        };
        return this.call(
          'POST',
          `${this.RESOURCE}/token`,
          form, // body
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default SpotifyAccountModule;