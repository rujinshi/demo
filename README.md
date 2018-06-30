# 学习过程中的DEMO

## 1.仿京东首页

此DEMO为初接触H5+CSS做的仿京东首页，由于技术栈的限制，此页面为静态页面。通过此DEMO对以下知识点加深了认识：

* 网页的制作流程；
* 盒子模型，无处不盒子；
* 边距的使用，宽度高度剩余法，或者将盒子转换成box-sizing；
* 浮动以及定位问题
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

## 2.