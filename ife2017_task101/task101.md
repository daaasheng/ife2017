
## css

	border:5px solid red;
	规定背景图片的大小
	background-size: 400px 200px;
	background:url(图片地址) no-repeat center top

## 鼠标悬浮
	：hover{
	}

## 图片模糊

	filter: url(blur.svg#blur); /* FireFox, Chrome, Opera */
    
    -webkit-filter: blur(10px); /* Chrome, Opera */
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(10px);
    
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */


	-webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(15px);