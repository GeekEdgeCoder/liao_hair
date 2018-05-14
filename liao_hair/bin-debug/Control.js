// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        var _this = _super.call(this) || this;
        _this.state = STATE.MAIN;
        _this.mainScenes = new MainScenes();
        _this.matchingScenes = new MatchingScenes();
        _this.fightBeginScenes = new FightBeginScenes();
        _this.fightOverScenes = new FightOverScenes();
        _this.addChild(_this.mainScenes);
        _this.mainScenes.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnBeginClick, _this);
        return _this;
    }
    Control.prototype.loadMain = function () {
        this.addChild(this.mainScenes);
    };
    Control.prototype.loadMatching = function () {
        this.addChild(this.matchingScenes);
    };
    Control.prototype.loadFightBegin = function () {
        // this.addChild(this.fightBeginScenes);
    };
    Control.prototype.loadFightOver = function () {
        // this.addChild(this.fightOverScenes);
    };
    Control.prototype.btnBeginClick = function (e) {
        this.state = STATE.MATCHIMG;
        this.removeChild(this.mainScenes);
        this.toggleScenes(this.state);
    };
    Control.prototype.toggleScenes = function (state) {
        switch (state) {
            case STATE.MAIN:
                this.loadMain();
                break;
            case STATE.MATCHIMG:
                this.loadMatching();
                break;
            case STATE.FIGHT_BEGIN:
                this.loadFightBegin();
                break;
            case STATE.FIGHT_OVER:
                this.loadFightOver();
                break;
        }
    };
    return Control;
}(egret.Sprite));
__reflect(Control.prototype, "Control");
