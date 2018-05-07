var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FightInfo = (function () {
    function FightInfo() {
    }
    return FightInfo;
}());
__reflect(FightInfo.prototype, "FightInfo");
var FightResult = (function () {
    function FightResult() {
    }
    return FightResult;
}());
__reflect(FightResult.prototype, "FightResult");
