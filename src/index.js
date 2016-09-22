import * as HydrationConstants from './constants';
import * as HydrationActions from './actions';
export {HydrationActions, HydrationConstants};

export default function hydrationReducer (reducer, params = []) {
  const INITIAL_STATE = reducer(undefined, {});

  return function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case HydrationConstants.HYDRATE_STATE:
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
