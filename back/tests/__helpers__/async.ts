export interface HttpTestError extends Error {
  status: number
  data: unknown
}

export const handleRequestFailure = ({ response: { status, data } }) => {
  const error = new Error(`${status}: ${JSON.stringify(data)}`) as HttpTestError;
  // remove parts of the stack trace so the error message (codeframe) shows up
  // at the code where the actual problem is.
  error.stack = error.stack
    .split('\n')
    .filter(
      (line) => !line.includes('handleRequestFailure')
        && !line.includes('processTicksAndRejections'),
    )
    .join('\n');
  error.status = status;
  error.data = data;
  return Promise.reject(error);
};

export const resolve = (e) => e;
