function animate(el,property,target){
	if(getComputedStyle){
		return getComputedStyle(el)[property]
	}else{
		return el.currentStyle[property];         //IE浏览器
	}
	setInterval(function(){
		var current = getStyle();
		
		var spped = (target - current)/30;
		
		speed = spped > 0 ? Math.ceil(speed) : Math.floor(speed);
		el.style[property] = current + speed +"px"; 
	},20)
}
