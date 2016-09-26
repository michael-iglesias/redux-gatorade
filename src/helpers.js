import {pipeP as _pipeP} from 'ramda';
import {pullAllWith as _pullAllWith, isEqual as _isEqual} from 'lodash';

module.exports = {
  processUrlParameters (selectParams, reqParams = [], funcPipeline) {
    let requiredParamsFound = reqParams.filter((elem) => {
      return (typeof selectParams[elem] !== 'undefined');
    });

    if (reqParams.length > 0 && requiredParamsFound.length !== reqParams.length) {
      return Promise.reject('Not all of the required URL Parameters were found.');
    }

    return funcPipeline(selectParams);
  },

  pluckProcessedParameters (allParams, selectParams) {
    return _pullAllWith(allParams, selectParams, _isEqual);
  },

  pipeP: _pipeP
};
