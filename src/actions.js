import * as GatoradeConstants from './constants';

module.exports = {
  hydrateFromUrlParams (params = {}) {
    return {
      type: GatoradeConstants.HYDRATE_STATE,
      payload: params
    };
  }
};
