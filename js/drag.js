class Drag{//类
	constructor(id){//构造器
		//属性
		this.ele = document.getElementById(id);
		this.ele.onmousedown = function(evt){
			this.fnDown(evt);
		}.bind(this);
	}
	//方法
	fnDown(evt){
		let e = evt || window.event;
		this.disX = e.offsetX;
		this.disY = e.offsetY;
		document.onmousemove = function(evt){
			this.fnMove(evt);
		}.bind(this);
		document.onmouseup = this.fnUp;
	}
	fnMove(evt){
		let e = evt || window.event;
		this.ele.style.left = e.pageX - this.disX + "px";
		this.ele.style.top = e.pageY - this.disY + "px";
	}
	fnUp(){
		document.onmousemove = null;
	}
}




