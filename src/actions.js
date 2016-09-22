import * as GatoradeConstants from './constants';

// hydrateFromUrlParams :: object -> object
export default function hydrateFromUrlParams (params = {}) {
  return {
    type: GatoradeConstants.HYDRATE_STATE,
    payload: params
  };
}
