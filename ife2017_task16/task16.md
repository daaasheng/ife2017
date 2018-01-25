
## 任务四：基础JavaScript练习（一） ##
## 描述
如图，模拟一个队列，队列的每个元素是一个数字，初始队列为空
有一个input输入框，以及4个操作按钮

点击"左侧入"，将input中输入的数字从左侧插入队列中；

点击"右侧入"，将input中输入的数字从右侧插入队列中；

点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；

点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；

点击队列中任何一个元素，则该元素会被从队列中删除

不使用任何第三方库、框架

## bug，缺少alert提示

自测：

case1： 添加正常

case2: 删除正常

## key1，事件监听

	node.addEventLintener("click",function(){
		//do
	});

## key2，获取node

	< id="id" >
    document.getElementById(id)
    < class="class" >
    document.getElementsByClassName(class)
    < name="name">
    document.getElementsByName(name)
    element.getElementsByClassName()
    <p></p>
    document.getElemnetsByTagName("p")
    element.getElementsByTagName()
    parent.firstChild
    parent.lastChild
    parent.firstElementChild  //read-only property

## key3，操作node

	document.creatElement("p")
    parent.append(node)
    parent.removeChild()
    parent.insertBefore(node,position)
    node.remove()
    node.before(position)
    node.after(position)
    node.replaceWith(oldNode)

