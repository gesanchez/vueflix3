import axios, { AxiosError, AxiosInstance } from "axios";

export class Requester {
  private static instance: AxiosInstance;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AxiosInstance {
    if (!Requester.instance) {
      Requester.instance = axios.create({
        baseURL: process.env.BASE_URL || "http://localhos:3000",
        timeout: 1000,
      });
    }

    return Requester.instance;
  }

  public static setState(
    loading: { value: boolean },
    error: { value: unknown }
  ): void {
    Requester.instance.interceptors.request.use(
      (config) => {
        loading.value = true;
        return config;
      },
      (e: AxiosError) => {
        error.value = e;
        loading.value = false;
        return Promise.reject(e);
      }
    );

    Requester.instance.interceptors.response.use(
      (response) => {
        loading.value = false;
        return response;
      },
      (e: AxiosError) => {
        loading.value = false;
        error.value = e;
        return Promise.reject(e);
      }
    );
  }
}
