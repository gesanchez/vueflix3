import { Ref, ref } from "vue";

export const useMovie = (
  props: Readonly<{
    titleProp: string;
    posterProp: string;
  }>
): { title: Ref<string>; poster: Ref<string> } => {
  return {
    title: ref(props.titleProp),
    poster: ref(props.posterProp),
  };
};
