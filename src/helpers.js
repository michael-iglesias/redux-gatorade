import {pullAllWith as _pullAllWith, isEqual as _isEqual} from 'lodash';
import {curry as r_curry} from 'ramda'; // eslint-disable-line camelcase

function processor (selectParams, reqParams = [], funcPipeline) {
  let requiredParamsFound = reqParams.filter((elem) => {
    return (typeof selectParams[elem] !== 'undefined');
  });

  if (reqParams.length > 0 && requiredParamsFound.length !== reqParams.length) {
    return Promise.reject('Not all of the required URL Parameters were found.');
  }

  return funcPipeline(selectParams);
}

let processUrlParameters = r_curry(processor);

module.exports = {
  processUrlParameters,
  pluckProcessedParameters (allParams, selectParams) {
    return _pullAllWith(allParams, selectParams, _isEqual);
  }
};
