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
var MainScenes = (function (_super) {
    __extends(MainScenes, _super);
    function MainScenes() {
        var _this = _super.call(this) || this;
        _this.skinName = "MainSkin";
        _this.setLayoutBoundsSize(640, 338);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createScenes, _this);
        return _this;
    }
    MainScenes.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScenes.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    MainScenes.prototype.createScenes = function () {
        // this.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // this.background = new egret.Bitmap();
        // this.background.texture = RES.getRes('bg_jpg');
        // this.addChild(this.background);
    };
    MainScenes.prototype.onButtonClick = function (e) {
        // this.
    };
    return MainScenes;
}(eui.Component));
__reflect(MainScenes.prototype, "MainScenes", ["eui.UIComponent", "egret.DisplayObject"]);
