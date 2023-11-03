// 基准大小
const baseSize = 37.5;
function setRem() {
  const root = document.documentElement;
  const windowWidth =
    window.innerWidth || root.clientWidth || document.body.clientWidth;

  const scale = windowWidth / 750;
  root.style.fontSize = baseSize * Math.min(scale, 1) + "px";
}
// 初始化
setRem();
window.onresize = function () {
  setRem();
};
export default baseSize;
