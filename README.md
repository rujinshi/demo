# 学习过程中的 DEMO

## [1.仿京东首页]-----[预览效果](https://htmlpreview.github.io/?https://github.com/rujinshi/Demo_Front/blob/master/1.%E4%BB%BF%E4%BA%AC%E4%B8%9C%E9%A6%96%E9%A1%B5_%E9%9D%99%E6%80%81/index.html#)

此 DEMO 为初接触 H5+CSS 做的仿京东首页，由于技术栈的限制，此页面为静态页面。通过此 DEMO 对以下知识点加深了认识：

- 网页的制作流程；
- 盒子模型，无处不盒子；
- 边距的使用，宽度高度剩余法，或者将盒子转换成 box-sizing；
- 浮动以及定位问题
- 字体图标的使用
- 清楚浮动问题，为什么要清除浮动。主要是为了解决父级元素（没有指定高度），因子级浮动引起内部高度为 0 的问题。解决方法(之一)：触发 BFC；
- 许多行内元素是没有宽和高的，需要转换 display 模式。可以转换成块级或者行内块，个人更喜欢行内块；

### CSS 的继承问题。

尤其是遇到标签 a 的继承问题。想更改 a 的样式，尝试修改 a 的父盒子样式，认为这样 a 就可以继承了，实际上是不行的。通过查询得到如下解释：

- 这主要是因为浏览器默认样式实际上已经为 a 标签设置好了一个颜色。它不会再去继承父元素的颜色了。（其实继承了，但是因为是继承的，所有优先级比不上自己本身设置的。**继承的 css 属性优先级是最低的**)

- 解决方法：

```css
a {
  color: inherit;
}
```

- 结合 transition 和 transform 实现了一些过渡效果，增加了视觉体验性。CSS3 新特性。

## [2.仿百度搜索框---效果预览](http://htmlpreview.github.io/?https://github.com/rujinshi/Demo_Front/blob/master/2.%E4%BB%BF%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E6%A1%86/index.html)

输入任何关键字，即可跳转百度，对关键字进行搜索。键盘上下选择、鼠标点击候选项以及点击搜索按钮都可以跳转搜索。

### 实现原理

向输入框动态输入时关键词，将当前关键词作为问号参数后面的值，因为要跨域使用百度的接口，所以通过 JSONP 跨域创建 Ajax 请求。回调函数处理返回值。

### 优化

- 使用 flex 布局

- 使用函数节流，控制 JSNOP 跨域请求的频率

- 使用箭头函数处理 setTimeout 中 this 指向问题

- 为了避免注册太多事件，影响内存，对于鼠标点击候选项 li 标签，或键盘上下选择以及回车跳转等一些列事件，利用事件冒泡原理，在最外层大盒子上使用事件委托。

- 由于 Id 是唯一的，因此相比 className 或者 tagName，根据 Id 查找是相对快的，但是上述获取到的结果都是 HTML 集合,该集合始终与底层文档保持连接，效率低下。 querySelector 以及 querySelectorAll，得到的是一个 NodeList，它是一个类数组对象，是不会带来 HTML 集合的问题,但是要考虑兼容性问题。另外，要避免反复查询，可以将 DOM 结点保存到变量中去。

- 尽可能少的去改变 DOM 包括添加，修改，删除。改变 DOM 就会引起浏览器渲染。所以之前动态创建 li 标签并插入到 DOM 中的方式性能是不高的，由于要插入的 li 标签个数不多可能无法体会，如果 li 标签多了就会有卡顿。

  ```js
  for (let i = 0; i < result.length; i++) {
    // 动态创建li标签 不推荐
    var liObj = document.createElement("li");
    liObj.innerHTML = result[i];
    searchResult.appendChild(liObj);
  }
  ```

  所以改成 innerHTML 的形式：

  ```js
  var str = "";
  for (let i = 0; i < result.length; i++) {
    str += `<li>${result[i]}</li>`;
  }
  searchResult.innerHTML = str;
  ```

## [3.原生 JS 实现轮播图--预览效果](http://htmlpreview.github.io/?https://github.com/rujinshi/Demo_Front/blob/banner/3.%E4%BB%BF%E5%B0%8F%E7%B1%B3%E5%8E%9F%E7%94%9FJS%E5%AE%9E%E7%8E%B0%E8%BD%AE%E6%92%AD%E5%9B%BE/index.html)

本轮播图非使用移动像素来实现，而是通过设置图片透明度 opacity 来实现。

- 初始化-----显示第一张图片，第一个小圆点背景颜色为淡粉色；
- 点击左右焦点和右下角小圆点能实现图片的切换；
- 设置一个 index 属性，保存索引，注册圆点点击事件。使用了一个全局变量来控制图片的切换和小圆点同步；
- 排他思想----先清除所有的，再设置当前的；
- 使用定时器 setInterval 实现每 3 秒自动轮播功能；
- 鼠标进入停止轮播，鼠标离开重新开始轮播。

### 不足

- 刚开始加载时会出现一种乱码的感觉-----可能跟图片大小有关。本地端预览时不会出现这样的状况。

## [4.响应式布局的 P2P 网站--预览效果](https://github.com/rujinshi/Demo_Front/blob/master/4.%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B8%83%E5%B1%80%E7%9A%84P2P%E7%BD%91%E7%AB%99/index.html)

通过 CSS3 中的[媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)实现三端适配的仿 P2P 金融网站
