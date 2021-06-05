import { Requester } from "./Requester";
import { ref } from "vue";

export const useRequest = () => {
  const instance = Requester.getInstance();
  const loading = ref(false);
  const error = ref(null);

  Requester.setState(loading, error);

  const get = (path: string) => {
    return instance.get(path);
  };

  const post = (path: string, body: unknown) => {
    return instance.post(path, body);
  };

  const put = (path: string, body: unknown) => {
    return instance.put(path, body);
  };

  const remove = (path: string) => {
    return instance.delete(path);
  };

  return { get, put, post, remove, loading, error };
};
