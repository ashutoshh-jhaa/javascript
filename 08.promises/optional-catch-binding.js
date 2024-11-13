// In practice, you may want to use the try...catch statement to check if a feature is implemented in the web browser.
// If the feature isn’t supported, you can fall back to a less desirable feature with broader support. For example:

try {
  // Attempt to use a feature that may not be available in all browsers
} catch (error) {
  // If the feature is not available, fall back to a more broadly supported alternative
  // In this case, the 'error' object is declared but not used.
}

// With the optional catch binding introduced in modern JavaScript, you can omit the 'error' binding and its parentheses
// when you don't need to access the caught error object:

try {
  // Try to use the feature
} catch {
  // Fall back to an alternative if the feature is not supported
  // The catch block no longer needs an 'error' variable
}
