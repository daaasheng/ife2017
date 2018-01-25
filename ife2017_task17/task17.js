window.onload = function() {
	var leftIn = document.getElementById("leftIn");
	var rightIn = document.getElementById("rightIn");
	var leftOut = document.getElementById("leftOut");
	var rightOut = document.getElementById("rightOut");
	var number1 = document.getElementById("number1");
	var numberList = document.getElementsByClassName("number");
	leftIn.addEventListener("click", function(){processQuene(1,0);});
	rightIn.addEventListener("click",function(){processQuene(1,1);});
	leftOut.addEventListener("click", function(){processQuene(0,0);});
	rightOut.addEventListener("click",function(){processQuene(0,1);});
	for(var i=0; i < numberList.length; i++){
		numberList[i].addEventListener("click",function(e){
			var parent = document.getElementById("show");
			parent.removeChild(this);
		});
	}
}

/**
 * 操作队列
 * @param1: 数值
 * @paran2: 1in0out
 * @paran3: 1right0left
 */
 function processQuene(Inout, dir){
 	var val = document.getElementById("inputNumber").value;
 	var parent = document.getElementById("show");
 	// var numbers = document.getElementsByClassName("number");
 	var firstChild = parent.firstChild;
 	var lastChild = parent.lastChild;
 	var child = document.createElement("span");
 	child.setAttribute("class","number");
 	child.innerHTML = val.length != 0 && val != null ? val : 0;
 	child.addEventListener("click",function(e){
		parent.removeChild(this);
	});
 	if(Inout){
 		dir ? parent.appendChild(child) : parent.insertBefore(child, firstChild); 
 	}else if(parent.children.length > 0){
 		var node = dir ? lastChild : firstChild;
 		var text = node.innerHTML;
 		alert(text);
 		parent.removeChild(node);
 	}
 }