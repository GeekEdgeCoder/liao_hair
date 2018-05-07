class MainScenes extends eui.Component implements eui.UIComponent {

	private background: egret.Bitmap;

	private beginButton: eui.Button;

	private begin: Begin;

	public constructor() {
		super();
		this.skinName = "MainSkin";
		this.setLayoutBoundsSize(640, 338);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createScenes,this);

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	createScenes() {
		
		this.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.background = new egret.Bitmap();
		// this.background.texture = RES.getRes('bg_jpg');
		// this.addChild(this.background);
	}
	private onButtonClick(e: egret.TouchEvent) {
        this.
    }
}