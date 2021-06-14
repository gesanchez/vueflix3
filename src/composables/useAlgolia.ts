import algoliasearch, { SearchIndex } from "algoliasearch";

/**
 * useAlgolia
 *
 * @description Composable para crear el cliente de algolia y retornar el objeto de algolia
 * @param index - Index a buscar en algolia
 */
export const useAlgolia = (index: string): { client: SearchIndex } => {
  const appId = process.env.VUE_APP_ALGOLIA_APP_ID;
  const appKey = process.env.VUE_APP_ALGOLIA_APP_KEY;

  const client = algoliasearch(appId, appKey);

  return {
    client: client.initIndex(index),
  };
};
