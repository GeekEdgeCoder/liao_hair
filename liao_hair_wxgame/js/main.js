var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Player = (function () {
    function Player() {
    }
    return Player;
}());
__reflect(Player.prototype, "Player");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
//
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.httpClient = new HttpClient();
        // 生命周期
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            console.log(context);
        });
        // 暂停
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        // 继续
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, login, userInfo, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // 加载资源
                    return [4 /*yield*/, this.loadResource()
                        // 创建场景
                    ];
                    case 1:
                        // 加载资源
                        _a.sent();
                        // 创建场景
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")
                            // 渲染动画
                            // this.startAnimation(result);
                            // 获取数据
                        ];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        login = _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        console.log(login.code);
                        return [4 /*yield*/, toPromise(this.httpClient.post(webServerURL + "sign/in", login))];
                    case 5:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        // let sky = this.createBitmapByName("bg_jpg");
        // 插入资源
        // this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        console.log(stageW, stageH);
        this.control = new Control();
        this.addChild(this.control);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    Main.prototype.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("连接成功，发送数据：" + cmd);
        this.webSocket.writeUTF(cmd);
    };
    Main.prototype.onReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("收到数据：" + msg);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
// TypeScript file
var test = (function () {
    function test() {
    }
    return test;
}());
__reflect(test.prototype, "test");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var STATE;
(function (STATE) {
    STATE[STATE["MAIN"] = 0] = "MAIN";
    STATE[STATE["MATCHIMG"] = 1] = "MATCHIMG";
    STATE[STATE["FIGHT_BEGIN"] = 2] = "FIGHT_BEGIN";
    STATE[STATE["FIGHT_OVER"] = 3] = "FIGHT_OVER";
})(STATE || (STATE = {}));
var webServerURL = 'http://localhost:3300/';
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
// TypeScript file
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
        _this.loadMain();
        return _this;
    }
    Control.prototype.loadMain = function () {
        this.addChild(this.mainScenes);
        // const pomelo = new PomeloForEgret.Pomelo();
        // const callback = (host, port) =>{
        // 		pomelo.init({
        // 			host: host,
        // 			port: port,
        // 			log: true
        // 		}, function() {
        // 			var route = "connector.entryHandler.enter";
        // 			pomelo.request(route, {
        // 				username: '123456',
        // 				rid: 1
        // 			}, function(data) {
        //                 console.log(data);
        // 				if(data.error) {
        // 					// showError(DUPLICATE_ERROR);
        // 					return;
        // 				}
        // 				// setName();
        // 				// setRoom();
        // 				// showChat();
        // 				// initUserList(data);
        // 			});
        // 		});
        // 	}
        // pomelo.init({
        // 	host: window.location.hostname,
        // 	port: 3014,
        // 	log: true
        // }, function() {
        // 	pomelo.request('gate.gateHandler.queryEntry', {
        // 		uid: '12'
        // 	}, function(data) {
        // 		pomelo.disconnect();
        // 		if(data.code === 500) {
        // 			// showError(LOGIN_ERROR);
        // 			return;
        // 		}
        // 		callback(data.host, data.port);
        // 	});
        // });
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
var User = (function () {
    function User() {
    }
    return User;
}());
__reflect(User.prototype, "User");
var Begin = (function () {
    function Begin() {
    }
    // 开始游戏，匹配，加载角色
    Begin.prototype.match = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function () { return new FightResult(); })];
                    case 1:
                        data = _a.sent();
                        // succcess
                        this.renderFightInfo(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 请求成功 渲染信息
    Begin.prototype.renderFightInfo = function (fightResult) {
    };
    // 请求失败 渲染失败界面
    Begin.prototype.renderError = function () {
    };
    return Begin;
}());
__reflect(Begin.prototype, "Begin");
var Fight = (function () {
    function Fight(players) {
    }
    Fight.prototype.render = function () {
    };
    return Fight;
}());
__reflect(Fight.prototype, "Fight");
var FightBeginScenes = (function (_super) {
    __extends(FightBeginScenes, _super);
    function FightBeginScenes() {
        return _super.call(this) || this;
    }
    FightBeginScenes.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FightBeginScenes.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return FightBeginScenes;
}(eui.Component));
__reflect(FightBeginScenes.prototype, "FightBeginScenes", ["eui.UIComponent", "egret.DisplayObject"]);
var FightOverScenes = (function (_super) {
    __extends(FightOverScenes, _super);
    function FightOverScenes() {
        return _super.call(this) || this;
    }
    FightOverScenes.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FightOverScenes.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return FightOverScenes;
}(eui.Component));
__reflect(FightOverScenes.prototype, "FightOverScenes", ["eui.UIComponent", "egret.DisplayObject"]);
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
var PomeloForEgret;
(function (PomeloForEgret) {
    var Pomelo = (function () {
        function Pomelo() {
            this.JS_WS_CLIENT_TYPE = 'js-websocket';
            this.JS_WS_CLIENT_VERSION = '0.0.5';
            this.RES_OK = 200;
            this.RES_FAIL = 500;
            this.RES_OLD_CLIENT = 501;
            this.socket = null;
            this.callbacks = {};
            this.handlers = {};
            // Map from request id to route
            this.routeMap = {};
            this.heartbeatInterval = 0;
            this.heartbeatTimeout = 0;
            this.nextHeartbeatTimeout = 0;
            this.gapThreshold = 100;
            this.heartbeatId = null;
            this.heartbeatTimeoutId = null;
            this.handshakeCallback = null;
            this.initCallback = null;
            this._callbacks = {};
            this.reqId = 0;
            if (!console.group) {
                console.group = console.log;
                console.groupEnd = function () { console.log("----"); };
                console.info = console.log;
                console.warn = console.log;
                console.error = console.log;
            }
            this._message = new Message();
            this._package = new Package();
            this.socket = null;
            this.callbacks = {};
            this.handlers = {};
            // Map from request id to route
            this.routeMap = {};
            this.heartbeatInterval = 0;
            this.heartbeatTimeout = 0;
            this.nextHeartbeatTimeout = 0;
            this.gapThreshold = 100;
            this.heartbeatId = null;
            this.heartbeatTimeoutId = null;
            this.handshakeCallback = null;
            this.handshakeBuffer = {
                'sys': {
                    type: this.JS_WS_CLIENT_TYPE,
                    version: this.JS_WS_CLIENT_VERSION
                },
                'user': {}
            };
            this.initCallback = null;
            this.reqId = 0;
            this.handlers[Package.TYPE_HANDSHAKE] = this.handshake;
            this.handlers[Package.TYPE_HEARTBEAT] = this.heartbeat;
            this.handlers[Package.TYPE_DATA] = this.onData;
            this.handlers[Package.TYPE_KICK] = this.onKick;
        }
        Pomelo.prototype.init = function (params, cb) {
            console.log("init", params);
            this.initCallback = cb;
            var host = params.host;
            var port = params.port;
            //
            //var url = 'ws://' + host;
            //if(port) {
            //    url +=  ':' + port;
            //}
            this.handshakeBuffer.user = params.user;
            this.handshakeCallback = params.handshakeCallback;
            this.initWebSocket(host, port, cb);
        };
        Pomelo.prototype.initWebSocket = function (host, port, cb) {
            console.log("[Pomelo] connect to:", host, port);
            this.socket = new egret.WebSocket();
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            this.socket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
            this.socket.addEventListener(egret.Event.CLOSE, this.onClose, this);
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onMessage, this);
            this.socket.connect(host, port);
        };
        Pomelo.prototype.on = function (event, fn) {
            (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        };
        Pomelo.prototype.request = function (route, msg, cb) {
            if (arguments.length === 2 && typeof msg === 'function') {
                cb = msg;
                msg = {};
            }
            else {
                msg = msg || {};
            }
            route = route || msg.route;
            if (!route) {
                return;
            }
            this.reqId++;
            if (this.reqId > 127) {
                this.reqId = 1;
            }
            var reqId = this.reqId;
            if (Pomelo.DEBUG) {
                console.group("REQUEST:");
                console.info("Route:", route);
                console.log("Id:", reqId);
                console.log("Param:", msg);
                console.groupEnd();
            }
            this.sendMessage(reqId, route, msg);
            this.callbacks[reqId] = cb;
            this.routeMap[reqId] = route;
        };
        Pomelo.prototype.notify = function (route, msg) {
            this.sendMessage(0, route, msg);
        };
        Pomelo.prototype.onMessage = function (event) {
            var byte = new egret.ByteArray();
            this.socket.readBytes(byte);
            this.processPackage(this._package.decode(byte));
        };
        Pomelo.prototype.sendMessage = function (reqId, route, msg) {
            var byte;
            byte = this._message.encode(reqId, route, msg);
            byte = this._package.encode(Package.TYPE_DATA, byte);
            this.send(byte);
        };
        Pomelo.prototype.onConnect = function (e) {
            console.log("[Pomelo] connect success", e);
            this.socket.writeBytes(this._package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(this.handshakeBuffer))));
            this.socket.flush();
        };
        Pomelo.prototype.onClose = function (e) {
            console.error("[Pomelo] connect close:", e);
            this.emit(Pomelo.EVENT_CLOSE, e);
        };
        Pomelo.prototype.onIOError = function (e) {
            this.emit(Pomelo.EVENT_IO_ERROR, e);
            console.error('socket error: ', e);
        };
        Pomelo.prototype.onKick = function (event) {
            this.emit(Pomelo.EVENT_KICK, event);
        };
        Pomelo.prototype.onData = function (data) {
            //probuff decode
            var msg = this._message.decode(data);
            if (msg.id > 0) {
                msg.route = this.routeMap[msg.id];
                delete this.routeMap[msg.id];
                if (!msg.route) {
                    return;
                }
            }
            //msg.body = this.deCompose(msg);
            this.processMessage(msg);
        };
        Pomelo.prototype.processMessage = function (msg) {
            if (!msg.id) {
                // server push message
                if (Pomelo.DEBUG) {
                    console.group("EVENT:");
                    console.info("Route:", msg.route);
                    console.info("Msg:", msg.body);
                    console.groupEnd();
                }
                this.emit(msg.route, msg.body);
                return;
            }
            if (Pomelo.DEBUG) {
                console.group("RESPONSE:");
                console.info("Id:", msg.id);
                console.info("Msg:", msg.body);
                console.groupEnd();
            }
            //if have a id then find the callback function with the request
            var cb = this.callbacks[msg.id];
            delete this.callbacks[msg.id];
            if (typeof cb !== 'function') {
                return;
            }
            if (msg.body && msg.body.code == 500) {
                var obj = { "code": 500, "desc": "服务器内部错误", "key": "INTERNAL_ERROR" };
                msg.body.error = obj;
            }
            cb(msg.body);
            return;
        };
        Pomelo.prototype.heartbeat = function (data) {
            if (!this.heartbeatInterval) {
                // no heartbeat
                return;
            }
            var obj = this._package.encode(Package.TYPE_HEARTBEAT);
            if (this.heartbeatTimeoutId) {
                egret.clearTimeout(this.heartbeatTimeoutId);
                this.heartbeatTimeoutId = null;
            }
            if (this.heartbeatId) {
                // already in a heartbeat interval
                return;
            }
            var self = this;
            self.heartbeatId = egret.setTimeout(function () {
                self.heartbeatId = null;
                self.send(obj);
                self.nextHeartbeatTimeout = Date.now() + self.heartbeatTimeout;
                self.heartbeatTimeoutId = egret.setTimeout(self.heartbeatTimeoutCb.bind(self, data), self, self.heartbeatTimeout);
            }, self, self.heartbeatInterval);
        };
        Pomelo.prototype.heartbeatTimeoutCb = function (data) {
            var gap = this.nextHeartbeatTimeout - Date.now();
            if (gap > this.gapThreshold) {
                this.heartbeatTimeoutId = egret.setTimeout(this.heartbeatTimeoutCb, this, gap);
            }
            else {
                console.error('server heartbeat timeout', data);
                this.emit(Pomelo.EVENT_HEART_BEAT_TIMEOUT, data);
                this._disconnect();
            }
        };
        Pomelo.prototype.off = function (event, fn) {
            this.removeAllListeners(event, fn);
        };
        Pomelo.prototype.removeAllListeners = function (event, fn) {
            // all
            if (0 == arguments.length) {
                this._callbacks = {};
                return;
            }
            // specific event
            var callbacks = this._callbacks[event];
            if (!callbacks) {
                return;
            }
            // remove all handlers
            if (event && !fn) {
                delete this._callbacks[event];
                return;
            }
            // remove specific handler
            var i = this.index(callbacks, fn._off || fn);
            if (~i) {
                callbacks.splice(i, 1);
            }
            return;
        };
        Pomelo.prototype.index = function (arr, obj) {
            if ([].indexOf) {
                return arr.indexOf(obj);
            }
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj)
                    return i;
            }
            return -1;
        };
        Pomelo.prototype.disconnect = function () {
            this._disconnect();
        };
        Pomelo.prototype._disconnect = function () {
            console.warn("[Pomelo] client disconnect ...");
            if (this.socket && this.socket.connected)
                this.socket.close();
            this.socket = null;
            if (this.heartbeatId) {
                egret.clearTimeout(this.heartbeatId);
                this.heartbeatId = null;
            }
            if (this.heartbeatTimeoutId) {
                egret.clearTimeout(this.heartbeatTimeoutId);
                this.heartbeatTimeoutId = null;
            }
        };
        Pomelo.prototype.processPackage = function (msg) {
            this.handlers[msg.type].apply(this, [msg.body]);
        };
        Pomelo.prototype.handshake = function (resData) {
            var data = JSON.parse(Protocol.strdecode(resData));
            if (data.code === this.RES_OLD_CLIENT) {
                this.emit(Pomelo.EVENT_IO_ERROR, 'client version not fullfill');
                return;
            }
            if (data.code !== this.RES_OK) {
                this.emit(Pomelo.EVENT_IO_ERROR, 'handshake fail');
                return;
            }
            this.handshakeInit(data);
            var obj = this._package.encode(Package.TYPE_HANDSHAKE_ACK);
            this.send(obj);
            if (this.initCallback) {
                this.initCallback(data);
                this.initCallback = null;
            }
        };
        Pomelo.prototype.handshakeInit = function (data) {
            if (data.sys) {
                Routedic.init(data.sys.dict);
                Protobuf.init(data.sys.protos);
            }
            if (data.sys && data.sys.heartbeat) {
                this.heartbeatInterval = data.sys.heartbeat * 1000; // heartbeat interval
                this.heartbeatTimeout = this.heartbeatInterval * 2; // max heartbeat timeout
            }
            else {
                this.heartbeatInterval = 0;
                this.heartbeatTimeout = 0;
            }
            if (typeof this.handshakeCallback === 'function') {
                this.handshakeCallback(data.user);
            }
        };
        Pomelo.prototype.send = function (byte) {
            if (this.socket && this.socket.connected) {
                this.socket.writeBytes(byte);
                this.socket.flush();
            }
        };
        //private deCompose(msg){
        //    return JSON.parse(Protocol.strdecode(msg.body));
        //}
        Pomelo.prototype.emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var params = [].slice.call(arguments, 1);
            var callbacks = this._callbacks[event];
            if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0, len = callbacks.length; i < len; ++i) {
                    callbacks[i].apply(this, params);
                }
            }
            return this;
        };
        Pomelo.DEBUG = true;
        Pomelo.EVENT_IO_ERROR = "io-error";
        Pomelo.EVENT_CLOSE = "close";
        Pomelo.EVENT_KICK = "onKick";
        Pomelo.EVENT_HEART_BEAT_TIMEOUT = 'heartbeat timeout';
        return Pomelo;
    }());
    PomeloForEgret.Pomelo = Pomelo;
    __reflect(Pomelo.prototype, "PomeloForEgret.Pomelo");
    var Package = (function () {
        function Package() {
        }
        Package.prototype.encode = function (type, body) {
            var length = body ? body.length : 0;
            var buffer = new egret.ByteArray();
            buffer.writeByte(type & 0xff);
            buffer.writeByte((length >> 16) & 0xff);
            buffer.writeByte((length >> 8) & 0xff);
            buffer.writeByte(length & 0xff);
            if (body)
                buffer.writeBytes(body, 0, body.length);
            return buffer;
        };
        Package.prototype.decode = function (buffer) {
            var type = buffer.readUnsignedByte();
            var len = (buffer.readUnsignedByte() << 16 | buffer.readUnsignedByte() << 8 | buffer.readUnsignedByte()) >>> 0;
            var body;
            if (buffer.bytesAvailable >= len) {
                body = new egret.ByteArray();
                if (len)
                    buffer.readBytes(body, 0, len);
            }
            else {
                console.log("[Package] no enough length for current type:", type);
            }
            return { type: type, body: body, length: len };
        };
        Package.TYPE_HANDSHAKE = 1;
        Package.TYPE_HANDSHAKE_ACK = 2;
        Package.TYPE_HEARTBEAT = 3;
        Package.TYPE_DATA = 4;
        Package.TYPE_KICK = 5;
        return Package;
    }());
    __reflect(Package.prototype, "Package", ["IPackage"]);
    var Message = (function () {
        function Message() {
        }
        Message.prototype.encode = function (id, route, msg) {
            var buffer = new egret.ByteArray();
            var type = id ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
            var byte = Protobuf.encode(route, msg) || Protocol.strencode(JSON.stringify(msg));
            var rot = Routedic.getID(route) || route;
            buffer.writeByte((type << 1) | ((typeof (rot) == "string") ? 0 : 1));
            if (id) {
                // 7.x
                do {
                    var tmp = id % 128;
                    var next = Math.floor(id / 128);
                    if (next != 0) {
                        tmp = tmp + 128;
                    }
                    buffer.writeByte(tmp);
                    id = next;
                } while (id != 0);
                // 5.x
                //				var len:Array = [];
                //				len.push(id & 0x7f);
                //				id >>= 7;
                //				while(id > 0)
                //				{
                //					len.push(id & 0x7f | 0x80);
                //					id >>= 7;
                //				}
                //
                //				for (var i:int = len.length - 1; i >= 0; i--)
                //				{
                //					buffer.writeByte(len[i]);
                //				}
            }
            if (rot) {
                if (typeof rot == "string") {
                    buffer.writeByte(rot.length & 0xff);
                    buffer.writeUTFBytes(rot);
                }
                else {
                    buffer.writeByte((rot >> 8) & 0xff);
                    buffer.writeByte(rot & 0xff);
                }
            }
            if (byte) {
                buffer.writeBytes(byte);
            }
            return buffer;
        };
        Message.prototype.decode = function (buffer) {
            // parse flag
            var flag = buffer.readUnsignedByte();
            var compressRoute = flag & Message.MSG_COMPRESS_ROUTE_MASK;
            var type = (flag >> 1) & Message.MSG_TYPE_MASK;
            var route;
            // parse id
            var id = 0;
            if (type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE) {
                // 7.x
                var i = 0;
                do {
                    var m = buffer.readUnsignedByte();
                    id = id + ((m & 0x7f) * Math.pow(2, (7 * i)));
                    i++;
                } while (m >= 128);
                // 5.x
                //				var byte:int = buffer.readUnsignedByte();
                //				id = byte & 0x7f;
                //				while(byte & 0x80)
                //				{
                //					id <<= 7;
                //					byte = buffer.readUnsignedByte();
                //					id |= byte & 0x7f;
                //				}
            }
            // parse route
            if (type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY || type === Message.TYPE_PUSH) {
                if (compressRoute) {
                    route = buffer.readUnsignedShort();
                }
                else {
                    var routeLen = buffer.readUnsignedByte();
                    route = routeLen ? buffer.readUTFBytes(routeLen) : "";
                }
            }
            //else if (type === Message.TYPE_RESPONSE)
            //{
            //    route = Pomelo.requests[id].route;
            //}
            //
            if (!id && !(typeof (route) == "string")) {
                route = Routedic.getName(route);
            }
            var body = Protobuf.decode(route, buffer) || JSON.parse(Protocol.strdecode(buffer));
            return { id: id, type: type, route: route, body: body };
        };
        Message.MSG_FLAG_BYTES = 1;
        Message.MSG_ROUTE_CODE_BYTES = 2;
        Message.MSG_ID_MAX_BYTES = 5;
        Message.MSG_ROUTE_LEN_BYTES = 1;
        Message.MSG_ROUTE_CODE_MAX = 0xffff;
        Message.MSG_COMPRESS_ROUTE_MASK = 0x1;
        Message.MSG_TYPE_MASK = 0x7;
        Message.TYPE_REQUEST = 0;
        Message.TYPE_NOTIFY = 1;
        Message.TYPE_RESPONSE = 2;
        Message.TYPE_PUSH = 3;
        return Message;
    }());
    __reflect(Message.prototype, "Message", ["IMessage"]);
    var Protocol = (function () {
        function Protocol() {
        }
        Protocol.strencode = function (str) {
            var buffer = new egret.ByteArray();
            buffer.length = str.length;
            buffer.writeUTFBytes(str);
            return buffer;
        };
        Protocol.strdecode = function (byte) {
            return byte.readUTFBytes(byte.bytesAvailable);
        };
        return Protocol;
    }());
    __reflect(Protocol.prototype, "Protocol");
    var Protobuf = (function () {
        function Protobuf() {
        }
        Protobuf.init = function (protos) {
            this._clients = protos && protos.client || {};
            this._servers = protos && protos.server || {};
        };
        Protobuf.encode = function (route, msg) {
            var protos = this._clients[route];
            if (!protos)
                return null;
            return this.encodeProtos(protos, msg);
        };
        Protobuf.decode = function (route, buffer) {
            var protos = this._servers[route];
            if (!protos)
                return null;
            return this.decodeProtos(protos, buffer);
        };
        Protobuf.encodeProtos = function (protos, msg) {
            var buffer = new egret.ByteArray();
            for (var name in msg) {
                if (protos[name]) {
                    var proto = protos[name];
                    switch (proto.option) {
                        case "optional":
                        case "required":
                            buffer.writeBytes(this.encodeTag(proto.type, proto.tag));
                            this.encodeProp(msg[name], proto.type, protos, buffer);
                            break;
                        case "repeated":
                            if (!!msg[name] && msg[name].length > 0) {
                                this.encodeArray(msg[name], proto, protos, buffer);
                            }
                            break;
                    }
                }
            }
            return buffer;
        };
        Protobuf.decodeProtos = function (protos, buffer) {
            var msg = {};
            while (buffer.bytesAvailable) {
                var head = this.getHead(buffer);
                var name = protos.__tags[head.tag];
                switch (protos[name].option) {
                    case "optional":
                    case "required":
                        msg[name] = this.decodeProp(protos[name].type, protos, buffer);
                        break;
                    case "repeated":
                        if (!msg[name]) {
                            msg[name] = [];
                        }
                        this.decodeArray(msg[name], protos[name].type, protos, buffer);
                        break;
                }
            }
            return msg;
        };
        Protobuf.encodeTag = function (type, tag) {
            var value = this.TYPES[type] != undefined ? this.TYPES[type] : 2;
            return this.encodeUInt32((tag << 3) | value);
        };
        Protobuf.getHead = function (buffer) {
            var tag = this.decodeUInt32(buffer);
            return { type: tag & 0x7, tag: tag >> 3 };
        };
        Protobuf.encodeProp = function (value, type, protos, buffer) {
            switch (type) {
                case 'uInt32':
                    buffer.writeBytes(this.encodeUInt32(value));
                    break;
                case 'int32':
                case 'sInt32':
                    buffer.writeBytes(this.encodeSInt32(value));
                    break;
                case 'float':
                    //Float32Array
                    var floats = new egret.ByteArray();
                    floats.endian = egret.Endian.LITTLE_ENDIAN;
                    floats.writeFloat(value);
                    buffer.writeBytes(floats);
                    break;
                case 'double':
                    var doubles = new egret.ByteArray();
                    doubles.endian = egret.Endian.LITTLE_ENDIAN;
                    doubles.writeDouble(value);
                    buffer.writeBytes(doubles);
                    break;
                case 'string':
                    buffer.writeBytes(this.encodeUInt32(value.length));
                    buffer.writeUTFBytes(value);
                    break;
                default:
                    var proto = protos.__messages[type] || this._clients["message " + type];
                    if (!!proto) {
                        var buf = this.encodeProtos(proto, value);
                        buffer.writeBytes(this.encodeUInt32(buf.length));
                        buffer.writeBytes(buf);
                    }
                    break;
            }
        };
        Protobuf.decodeProp = function (type, protos, buffer) {
            switch (type) {
                case 'uInt32':
                    return this.decodeUInt32(buffer);
                case 'int32':
                case 'sInt32':
                    return this.decodeSInt32(buffer);
                case 'float':
                    var floats = new egret.ByteArray();
                    buffer.readBytes(floats, 0, 4);
                    floats.endian = egret.Endian.LITTLE_ENDIAN;
                    var float = buffer.readFloat();
                    return floats.readFloat();
                case 'double':
                    var doubles = new egret.ByteArray();
                    buffer.readBytes(doubles, 0, 8);
                    doubles.endian = egret.Endian.LITTLE_ENDIAN;
                    return doubles.readDouble();
                case 'string':
                    var length = this.decodeUInt32(buffer);
                    return buffer.readUTFBytes(length);
                default:
                    var proto = protos && (protos.__messages[type] || this._servers["message " + type]);
                    if (proto) {
                        var len = this.decodeUInt32(buffer);
                        if (len) {
                            var buf = new egret.ByteArray();
                            buffer.readBytes(buf, 0, len);
                        }
                        return len ? Protobuf.decodeProtos(proto, buf) : false;
                    }
                    break;
            }
        };
        Protobuf.isSimpleType = function (type) {
            return (type === 'uInt32' ||
                type === 'sInt32' ||
                type === 'int32' ||
                type === 'uInt64' ||
                type === 'sInt64' ||
                type === 'float' ||
                type === 'double');
        };
        Protobuf.encodeArray = function (array, proto, protos, buffer) {
            var isSimpleType = this.isSimpleType;
            if (isSimpleType(proto.type)) {
                buffer.writeBytes(this.encodeTag(proto.type, proto.tag));
                buffer.writeBytes(this.encodeUInt32(array.length));
                var encodeProp = this.encodeProp;
                for (var i = 0; i < array.length; i++) {
                    encodeProp(array[i], proto.type, protos, buffer);
                }
            }
            else {
                var encodeTag = this.encodeTag;
                for (var j = 0; j < array.length; j++) {
                    buffer.writeBytes(encodeTag(proto.type, proto.tag));
                    this.encodeProp(array[j], proto.type, protos, buffer);
                }
            }
        };
        Protobuf.decodeArray = function (array, type, protos, buffer) {
            var isSimpleType = this.isSimpleType;
            var decodeProp = this.decodeProp;
            if (isSimpleType(type)) {
                var length = this.decodeUInt32(buffer);
                for (var i = 0; i < length; i++) {
                    array.push(decodeProp(type, protos, buffer));
                }
            }
            else {
                array.push(decodeProp(type, protos, buffer));
            }
        };
        Protobuf.encodeUInt32 = function (n) {
            var result = new egret.ByteArray();
            do {
                var tmp = n % 128;
                var next = Math.floor(n / 128);
                if (next !== 0) {
                    tmp = tmp + 128;
                }
                result.writeByte(tmp);
                n = next;
            } while (n !== 0);
            return result;
        };
        Protobuf.decodeUInt32 = function (buffer) {
            var n = 0;
            for (var i = 0; i < buffer.length; i++) {
                var m = buffer.readUnsignedByte();
                n = n + ((m & 0x7f) * Math.pow(2, (7 * i)));
                if (m < 128) {
                    return n;
                }
            }
            return n;
        };
        Protobuf.encodeSInt32 = function (n) {
            n = n < 0 ? (Math.abs(n) * 2 - 1) : n * 2;
            return this.encodeUInt32(n);
        };
        Protobuf.decodeSInt32 = function (buffer) {
            var n = this.decodeUInt32(buffer);
            var flag = ((n % 2) === 1) ? -1 : 1;
            n = ((n % 2 + n) / 2) * flag;
            return n;
        };
        Protobuf.TYPES = {
            uInt32: 0,
            sInt32: 0,
            int32: 0,
            double: 1,
            string: 2,
            message: 2,
            float: 5
        };
        Protobuf._clients = {};
        Protobuf._servers = {};
        return Protobuf;
    }());
    __reflect(Protobuf.prototype, "Protobuf");
    var Routedic = (function () {
        function Routedic() {
        }
        Routedic.init = function (dict) {
            this._names = dict || {};
            var _names = this._names;
            var _ids = this._ids;
            for (var name in _names) {
                _ids[_names[name]] = name;
            }
        };
        Routedic.getID = function (name) {
            return this._names[name];
        };
        Routedic.getName = function (id) {
            return this._ids[id];
        };
        Routedic._ids = {};
        Routedic._names = {};
        return Routedic;
    }());
    __reflect(Routedic.prototype, "Routedic");
})(PomeloForEgret || (PomeloForEgret = {}));
// TypeScript file
var _this = this;
var toPromise = function (request) {
    return new Promise(function (resolve, reject) {
        request.addEventListener(egret.ProgressEvent.COMPLETE, function (event) {
            var request = event.currentTarget;
            var response = request.response;
            try {
                response = JSON.parse(request.response);
            }
            catch (e) {
            }
            finally {
                resolve(response);
            }
        }, _this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (event) {
            reject(event);
        }, _this);
    });
};
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, headers) {
        if (headers === void 0) { headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }; }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
            var key = _a[_i];
            request.setRequestHeader(key, headers[key]);
        }
        request.send();
        return request;
    };
    HttpClient.prototype.post = function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }; }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.POST);
        for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
            var key = _a[_i];
            request.setRequestHeader(key, headers[key]);
        }
        request.send(params);
        return request;
    };
    return HttpClient;
}());
__reflect(HttpClient.prototype, "HttpClient");
// // TypeScript file
// class Pomelo {
//     sock: egret.WebSocket;
//     constructor(params, cb) {
//         this.init(params, cb);
//     }
//     init(params, cb) {
//         const {host, port = 80} = params;
//         const url = `ws://${host}:${port}`;
//         this.initWebSocket(url, cb);
//     }
//     initWebSocket(url, cb) {
//         this.sock = new egret.WebSocket();
//         this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, res => {
//             console.log(res.readUTF());
//         }, this);
//         this.sock.addEventListener(egret.Event.CONNECT, res => {
//             this.sock.writeUTF('1231');
//         }, this);
//         console.log(123);
//         this.sock.connectByUrl(url);
//     }
//     request(route, msg, cb) {
//         if (arguments.length === 2 && typeof msg === 'function') {
//             cb = msg;
//             msg = {};
//         } else {
//             msg = msg || {};
//         }
//         route = route || msg.route;
//         if (!route) {
//             return;
//         }
//         this.send(msg);
//     }
//     send(packet){
//         this.sock.writeUTF(packet);
//     }
// } 
;window.Main = Main;