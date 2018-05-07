var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MatchScene = (function () {
    function MatchScene() {
    }
    MatchScene.prototype.main = function (state) {
        if (state === void 0) { state = -1; }
        return state === STATE.MAIN;
    };
    MatchScene.prototype.matching = function (state) {
        if (state === void 0) { state = -1; }
        return state === STATE.MATCHIMG;
    };
    MatchScene.prototype.fightBegin = function (state) {
        if (state === void 0) { state = -1; }
        return state === STATE.FIGHT_BEGIN;
    };
    MatchScene.prototype.fightOver = function (state) {
        if (state === void 0) { state = -1; }
        return state === STATE.FIGHT_OVER;
    };
    return MatchScene;
}());
__reflect(MatchScene.prototype, "MatchScene");
