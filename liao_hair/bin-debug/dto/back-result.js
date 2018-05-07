var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BackInfo = (function () {
    function BackInfo() {
    }
    return BackInfo;
}());
__reflect(BackInfo.prototype, "BackInfo");
var BackResult = (function () {
    function BackResult() {
    }
    return BackResult;
}());
__reflect(BackResult.prototype, "BackResult");
