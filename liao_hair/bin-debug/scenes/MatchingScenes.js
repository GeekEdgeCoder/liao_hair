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
var MatchingScenes = (function (_super) {
    __extends(MatchingScenes, _super);
    function MatchingScenes() {
        var _this = _super.call(this) || this;
        _this.skinName = 'MatchingSkin';
        return _this;
    }
    MatchingScenes.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MatchingScenes.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return MatchingScenes;
}(eui.Component));
__reflect(MatchingScenes.prototype, "MatchingScenes", ["eui.UIComponent", "egret.DisplayObject"]);
