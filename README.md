# Redux Gatorade - Keeping your application state hydrated

_redux library that helps out in hydrating state from URL parameters_


## Installation

```
npm install --save redux-gatorade
```

## What is included?

### I. A higher-order reducer - HydrationReducer

HydrationReducer :: (Reducer, params) -> Reducer
```
import { combineReducers } from 'redux';
import { HydrationReducer } from 'redux-gatorade';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: HydrationReducer(appReducer, ['promoCode', 'referralCode']),
  ...
  ...
  ...
});
```
_NOTE: The new reducer returned by HydrationReducer() is now waiting for an action of type: 'redux-gatorade/HYDRATE_FROM_URL_PARAMS' to be dispatched; which will then add a property 'urlParameters' to the state object_
```
{
  ...state,
  urlParameters: {
    promoCode: '10PERCENT_OFF',
    referralCode: 'foobar'
  }
}
```

### II. Actions - 1) hydrateFromUrlParams() - which will dispatch action type of 'redux-gatorade/HYDRATE_FROM_URL_PARAMS'
```
import { HydrationActions } from 'redux-gatorade';

// hydrateFromUrlParams :: Object -> Action
HydrationActions.hydrateFromUrlParams({ promoCode: '10PERCENT_OFF', referralCode: 'foobar' });
// -> { type: 'redux-gatorade/HYDRATE_FROM_URL_PARAMS', payload: { promoCode: '10PERCENT_OFF', referralCode: 'foobar' } }
```







## License

MIT, see `LICENSE.md` for more information.
