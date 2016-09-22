import * as GatoradeConstants from './constants';

export default function gatoradeReducer (reducer, params = []) {
  const INITIAL_STATE = reducer(undefined, {});

  return function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case GatoradeConstants.HYDRATE_STATE:
        return Object.assign({}, state, {
          urlParameters: params.reduce((acc, currVal) => {
            acc[currVal] = action.payload[currVal] || null;

            return acc;
          }, {})
        });

      default:
        return reducer(state, action);
    }
  };
}
