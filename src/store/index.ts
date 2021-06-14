import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import { StateType } from "./types";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export const key: InjectionKey<Store<StateType>> = Symbol();

export function useStore(): Store<StateType> {
  return baseUseStore(key);
}
