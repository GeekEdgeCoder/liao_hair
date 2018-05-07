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
        this.mainScenes.beginButton
    }
}