import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { NetworkError } from 'network/Instance/errors';

export type TAxios = {} & Promise<AxiosResponse>;

class Instance {
  instance: AxiosInstance;
  methods: any;

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: {
        // Authorization: '',
      },
    });

    this.methods = new Map([
      ['post', this.instance.post],
      ['get', this.instance.get],
      ['put', this.instance.put],
      ['patch', this.instance.patch],
      ['delete', this.instance.delete],
    ]);
  }

  public setToken(token, custom?) {
    if (custom) {
      this.instance.defaults.headers.Authorization = token;
    } else {
      this.instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
    return this;
  }

  public async send(methodName: string, ...args: any): TAxios {
    try {
      const method = this.methods.get(methodName);
      const { data } = await method(...args);

      return data;
    } catch ({ name, response }) {
      if (response) {
        const {
          data: { message },
          status,
        } = response;

        throw new NetworkError({ message, status });
      } else {
        throw new NetworkError({
          message: 'No connection to server',
          status: 502,
        });
      }
    }
  }
}

export default Instance;
