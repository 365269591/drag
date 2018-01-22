//创建类
class SubDrag extends Drag{//继承父类
	constructor(id){
		super(id);//调用父类的构造器
	}
	fnMove(evt){
		let e = evt || window.event;
		let l = e.pageX - this.disX;
		let t = e.pageY - this.disY;
		//设置边界
		if(l <= 0){
			l = 0;
		}else if(l > document.documentElement.clientWidth - this.ele.offsetWidth){
			l = document.documentElement.clientWidth - this.ele.offsetWidth;
		}
		if(t <= 0){
			t = 0;
		}else if(t > document.documentElement.clientHeight - this.ele.offsetHeight){
			t = document.documentElement.clientHeight - this.ele.offsetHeight;
		}
		this.ele.style.left = l + "px";
		this.ele.style.top = t + "px";
	}
}
