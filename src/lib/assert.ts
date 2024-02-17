/**
 * This function sets up the global `assert` function.
 * If `THROW_ASSERTION_ERROR` is true, it sets the global `assert` function to `unsafeAssert`, which throws an error when the condition is false.
 * Otherwise, it sets the global `assert` function to `safeAssert`, which logs the error message to the console.
 */
export function setupGlobalAssert() {
  if (THROW_ASSERTION_ERROR) {
    window.assert = unsafeAssert;
  } else {
    window.assert = safeAssert;
  }
}

/**
 * This function is an assert function.
 * If the condition is false, it throws an error with the given message.
 */
function unsafeAssert(condition: boolean, message: string) {
  if (!condition) {
    const error = new Error(message);
    error.name = 'AssertionError';
    throw error;
  }
}

/**
 * This function is a safe version of the assert function.
 * It never throws an error, but instead logs the error message to the console.
 */
function safeAssert(condition: boolean, message: string) {
  console.assert(condition, message);
}
