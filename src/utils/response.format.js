const successResponse = (isSucceeded, status, message, data, input) => {
  return {
    success: isSucceeded,
    status,
    message,
    data,
    input,
  };
};

const failureResponse = (isSucceeded, status, message, error, input) => {
  return {
    success: isSucceeded,
    status,
    message,
    error,
    input,
  };
};

module.exports = { successResponse, failureResponse };
