/**
 * Return action names
 * @param name
 * @param options
 * @returns {{INITIAL: string, SUCCEEDED: string, FAILED: string}}
 */
export default (name = 'action', options = { snakecase: true }) => {
  const succededString = options.snakecase ? '_SUCCEEDED' : 'Succeeded';
  const failedString = options.snakecase ? '_FAILED' : 'Failed';

  return {
    INITIAL: name,
    SUCCEEDED: `${name}${succededString}`,
    FAILED: `${name}${failedString}`
  };
};
