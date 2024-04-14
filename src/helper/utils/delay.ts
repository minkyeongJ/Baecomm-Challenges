/**
 * 쓰로틀링 함수
 * @param func 실행 할 함수
 * @param limit 함수 호출 간의 최소 시간간격
 * @returns
 */
export const throttle = (
  func: (...args: any[]) => void,
  limit: number
): ((...args: any[]) => void) => {
  let timerId: any;

  return function () {
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      func();
      timerId = undefined;
    }, limit);
  };
};
