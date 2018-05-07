var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var InstantInfo = (function () {
    function InstantInfo() {
    }
    return InstantInfo;
}());
__reflect(InstantInfo.prototype, "InstantInfo");
var InstantResult = (function () {
    function InstantResult() {
    }
    return InstantResult;
}());
__reflect(InstantResult.prototype, "InstantResult");
