## 实现

1.适用于chrome、firefox

### key1:calc(30% - 10px) 计算

### key2：box-sizing属性

	box-sizing:border-box;
	-moz-box-sizing:border-box; /* Firefox */
	-webkit-box-sizing:border-box; /* Safari */

### key3: @media (max-width：768px){}

	col-lg一般用于大屏设备，(min-width:1200px);
	col-md一般用于中屏设备，(min-width：992px);
	col-sm一般用于小屏设备，(min-width：768px);
	col-xs用于超小型设备，(max-width：768px);

## 要求

1.不适用框架

2.实现BootStrap网格效果，如图所示

## 参考

以 BootStrap 的网格系统为例，DOM 元素类名形如 col-md-4；其中 col 是“列” column 的缩写；md 是 medium 的缩写，适用于应屏幕宽度大于 768px 的场景；4 是占四栏的意思。因此，col-md-4 的意思是，在屏幕宽度大于 768px 时，该元素占四栏。

1.[https://getbootstrap.com/examples/grid/](https://getbootstrap.com/examples/grid/)

2.[http://j4n.co/blog/Creating-your-own-css-grid-system](http://j4n.co/blog/Creating-your-own-css-grid-system)

3.[http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem](http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem)


