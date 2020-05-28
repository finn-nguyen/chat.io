import _ from 'lodash';

const validatorPipeLine = (...validators) => {
  _.each(validators, (validator) => validator());
};

export default validatorPipeLine;
