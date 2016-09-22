import assert from 'assert';
import { createStore } from 'redux';
import hydrationReducer, {HydrationConstants} from '../src/index';

let reducer = (state = {}, action) => {
  switch (action.type) {
    case HydrationConstants.HYDRATE_STATE:
      return Object.assign({}, state, {
        urlParameters: action.payload
      });
    default:
      return {};
  }
};

let wrappedReducer = hydrationReducer(reducer, ['urlparam1', 'urlparam2']);

describe('filterActions()', () => {
  it('should return an initial state when a redux store is created', () => {
    let store = createStore(wrappedReducer);

    assert.deepEqual(
      store.getState(),
      reducer(undefined, {}));
  });
});
