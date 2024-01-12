export function debounce<P extends any[]>(
  callback: (...args: P) => any,
  timeout: number
): (...args: P) => void {
  let timer: NodeJS.Timeout;
  return (...args: P) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
