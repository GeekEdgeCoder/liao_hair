class MatchScene {
    public main(state: Number = -1) {
        return state === STATE.MAIN;
    }
    public matching(state: Number = -1) {
        return state === STATE.MATCHIMG;
    }
    public fightBegin(state: Number = -1) {
        return state === STATE.FIGHT_BEGIN;
    }
    public fightOver(state: Number = -1) {
        return state === STATE.FIGHT_OVER;
    }
}