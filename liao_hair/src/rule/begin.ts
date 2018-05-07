class Begin {
    // 开始游戏，匹配，加载角色
    async match() {
        const data: FightResult = <FightResult> await new Promise(() => new FightResult());
        // succcess
       this.renderFightInfo(data);
    }
    // 请求成功 渲染信息
    renderFightInfo(fightResult: FightResult) {

    }
    // 请求失败 渲染失败界面
    renderError() {

    }
}