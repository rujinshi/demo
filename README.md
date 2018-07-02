# 学习过程中的DEMO

## [1.仿京东首页](https://github.com/rujinshi/Demo_Front/tree/master/1.%E4%BB%BF%E4%BA%AC%E4%B8%9C%E9%A6%96%E9%A1%B5_%E9%9D%99%E6%80%81)-----[预览效果](http://www.rujinshi.com.cn/Demo_Front//1.%E4%BB%BF%E4%BA%AC%E4%B8%9C%E9%A6%96%E9%A1%B5_%E9%9D%99%E6%80%81/index.html)

此DEMO为初接触H5+CSS做的仿京东首页，由于技术栈的限制，此页面为静态页面。通过此DEMO对以下知识点加深了认识：

* 网页的制作流程；
* 盒子模型，无处不盒子；
* 边距的使用，宽度高度剩余法，或者将盒子转换成box-sizing；
* 浮动以及定位问题
* 字体图标的使用
* 清楚浮动问题，为什么要清楚浮动。主要是为了解决父级元素（没有指定高度），因子级浮动引起内部高度为0的问题。解决方法：触发BFC；
* 许多行内元素是没有宽和高的，需要转换display模式。可以转换成块级或者行内块，个人更喜欢行内块；

### CSS的继承问题。
尤其是遇到标签a的继承问题。想更改a的样式，尝试修改a的父盒子样式，认为这样a就可以继承了，实际上是不行的。通过查询得到如下解释：
* 这主要是因为浏览器默认样式实际上已经为a标签设置好了一个颜色。它不会再去继承父元素的颜色了。（其实继承了，但是因为是继承的，所有优先级比不上自己本身设置的。**继承的css属性优先级是最低的**)

* 解决方法：
```css
a{color:inherit}
```
* 结合transition和transform实现了一些过渡效果，增加了视觉体验性。CSS3新特性。

## [2.仿百度搜索框](https://github.com/rujinshi/Demo_Front/tree/master/2.%E4%BB%BF%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E6%A1%86)

输入关键字——“汽”，搜索框下方会自动出现预定的联想词条，删除关键字，词条消失。

* 注册键盘抬起事件；
* 只创建一个元素——有则删除，无则创建；
* createElement以及appendChild的使用
* 鼠标进入以及鼠标离开事件
* 实现匹配的主要方法-indexOf()的使用

## [3.原生JS实现仿小米轮播图](https://github.com/rujinshi/Demo_Front/tree/master/3.%E4%BB%BF%E5%B0%8F%E7%B1%B3%E5%8E%9F%E7%94%9FJS%E5%AE%9E%E7%8E%B0%E8%BD%AE%E6%92%AD%E5%9B%BE)-----[预览效果](http://www.rujinshi.com.cn/Demo_Front/3.%E4%BB%BF%E5%B0%8F%E7%B1%B3%E5%8E%9F%E7%94%9FJS%E5%AE%9E%E7%8E%B0%E8%BD%AE%E6%92%AD%E5%9B%BE/index.html)