// TypeScript file


class Control extends egret.Sprite {
    private state: Number;
    private mainScenes: MainScenes;
    private matchingScenes: MatchingScenes;
    private fightBeginScenes: FightBeginScenes;
    private fightOverScenes: FightOverScenes;

    constructor() {
        super();
        this.state = STATE.MAIN;
        this.mainScenes = new MainScenes();
        this.matchingScenes = new MatchingScenes();
        this.fightBeginScenes = new FightBeginScenes();
        this.fightOverScenes = new FightOverScenes();
        
        this.addChild(this.mainScenes);
        this.mainScenes.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBeginClick, this);
        this.loadMain();
    }

    loadMain(){
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
    
    }

    loadMatching(){
        this.addChild(this.matchingScenes);
    }

    loadFightBegin(){
        // this.addChild(this.fightBeginScenes);
    }

    loadFightOver(){
        // this.addChild(this.fightOverScenes);
    }

    btnBeginClick(e: egret.TouchEvent) {
        this.state = STATE.MATCHIMG;
        this.removeChild(this.mainScenes);
        this.toggleScenes(this.state);
    }

    toggleScenes(state){
        switch(state){
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
    }


}