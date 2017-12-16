## 实现

### key1：图标与文字对齐

line-height + vertical-align（推荐）

    <div class="login-btn">
            <img src="login.svg" class="login-logo" alt="登录图标"  />
            <span>登录</span>
        </div>
    
    .login-btn {
        position: absolute;
        right: 94px; /*1280-1163-23=*/
        top: 20px;
        line-height: 20px;
    }
    .login-btn img{
        width: 15px;
        height: 16px;
        vertical-align: -3px;
    }
    

## 要求

1.实践代码的复用、优化

2.整个页面内容宽度固定，但头部的蓝色导航和浏览器宽度保持一致

3.有能力余力的同学可以尝试实现不使用JavaScript的情况下，实现Tab切换

4.在Chrome中完美实现与设计稿的除了文字以外的各项图片、字体、颜色、布局、内外边距等样式

## 参考

