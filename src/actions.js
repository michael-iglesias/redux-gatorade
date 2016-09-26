import HydrationConstants from './constants';

module.exports = {
  hydrateFromUrlParams (params = {}) {
    return {
      type: HydrationConstants.HYDRATE_STATE,
      payload: params
    };
  }
};
