import 'jest-preset-angular';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;
