# 任务三：零基础JavaScript编码（三） #

目的

    接触一下JavaScript中的高级选择器
    学习JavaScript中的数组对象遍历、读写、排序等操作
    学习简单的字符串处理操作

要求

	
    参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
    将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

## key1 sort的使用

### sort

	 var arr = [2,5,1,6,7];
	 arr.sort();   //[1, 2, 5, 6, 7]
 
### 升序 
 
	 var arr = [2,5,1,6,7];
	 arr.sort(function(a,b){
	         return a-b;
	 });   //[1, 2, 5, 6, 7]
 
### 降序 
 
	 var arr = [2,5,1,6,7];
	 arr.sort(function(a,b){
	         return b-a;
	 });   //[7, 6, 5, 2, 1]
 
### arrObj
 
	 var arrObj = [{name: 'a', value: 37},{name: 'b', value: 34},{name: 'c', value: 40}];
	 arrObj.sort(function(a,b){
	     return a.value-b.value;
	 });
	 
	 //b,a,c


## 问题

Q1：js文档初始加载函数

	<body onload="myfunction()">
	window.onload=function()
jQ

	$(document).ready(function() { 
	$(function() { 

Q2：触发

	id.onclick = function();

	id.addEventListener("event",function(){
	});
Q3:获取元素及值

	var id = document.getElementById("");

	var name = document.getElementsByTagName("");

    id.innerHTML;

	id.innerText;

Q4: 添加元素及赋值

	id.innerHTML = "";
   
	id.append(document.creatElement("div"));

Q4: 数组

	var arr = new Array();
	
	arr.push("");

## bug

 1.初始化

 2.城市，AQI捆绑