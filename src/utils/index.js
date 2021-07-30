export const handleErrorObject = (errorMsg = '') => {
  console.log(errorMsg)
  if (errorMsg.includes('E11000')) {
    return {
      type: 'email',
      message: 'This user exist. Choose another email!'
    }
  }
  const errorType = errorMsg.slice(errorMsg.indexOf('"'), errorMsg.lastIndexOf('"'));
  return {
    type: errorType.replace('\"', '').replace('\\', ''),
    message: errorMsg
  }
};


export const getValidInputData = (data = {}, excludedFields = []) => {
  let result = {};
  const blackList = [null, '', undefined];

  for (let x in data) {
    if (Array.isArray(data[x]) && data[x].length) {
      result = { ...result, [x]: data[x] };
    } else if (!blackList.includes(data[x]) && !excludedFields.includes(x)) {
      result = { ...result, [x]: data[x] };
    }
  }

  return result;
}