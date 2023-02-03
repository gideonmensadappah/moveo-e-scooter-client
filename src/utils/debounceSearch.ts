export function debounceSearch(func: any, timeout: number = 100) {
  let timer: number = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    setTimeout(() => {
      // @ts-ignore: Unreachable code error
      func.apply(this, args);
    }, timeout);
  };
}
