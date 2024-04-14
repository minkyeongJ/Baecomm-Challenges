import { atom } from "recoil";

// 스크롤 위치를 저장할 atom
export const scrollPositionState = atom({
  key: "scrollPositionState",
  default: 0, // 기본값은 스크롤 위치 0
});
