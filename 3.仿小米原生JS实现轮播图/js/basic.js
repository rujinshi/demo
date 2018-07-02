//获取最外面的box
var aBox = document.getElementsByClassName("container")[0];
// console.log(aBox);
//获取相框
var aBanner = document.getElementsByClassName("banner");
// console.log(aBanner);
//获取tab
var aTab = document.getElementsByClassName("tab")[0];
// console.log(aTab);
//获取tab里的span
var aSpan = aTab.getElementsByTagName("span");
// console.log(aSpan);
var oNext = document.getElementById("right");
// console.log(aNext);
var oPrev = document.getElementById("left");
// console.log(aPrev);

//默认显示第一张图片，第一个小圆点添加背景颜色
aBanner[0].style.opacity = "1";
aSpan[0].className = "current";
var num = 0;

//点击小圆点图片相对应进行切换
for (var i = 0; i < aSpan.length; i++) {
    //获取索引
    aSpan[i].index = i;
    aSpan[i].onclick = function () {
        for (var j = 0; j < aSpan.length; j++) {
            //全局  使得图片和小圆点同步
            num = this.index;
            //首先清除格式
            aSpan[j].className = "";
            aBanner[j].style.opacity = "0";
        }
        aSpan[num].className = "current";
        aBanner[num].style.opacity = "1";
    }
}



//右侧焦点，点击切换下一张
oNext.onclick = clickHandle;
function clickHandle() {
    for (var j = 0; j < aSpan.length; j++) {
        if (aSpan[j].className == "current") {
            aSpan[j].className = "";
            aBanner[j].style.opacity="0";
            j++;
            num++;
            if (j>5){
                j=0;
            }
            aSpan[j].className="current";
            aBanner[j].style.opacity="1";
        }
    }
};

//左侧焦点，点击切换上一张
oPrev.onclick=function () {
    for(var j = 0 ;j < aSpan.length; j++){
        if(aSpan[j].className == "current"){
            aSpan[j].className = "";
            aBanner[j].style.opacity = "0";
            j--;
            num--;
            if(j < 0){
                j = 5;
            }
            aSpan[j].className = "current";
            aBanner[j].style.opacity = "1";

        }
    }
};
//清除定时器
clearInterval(timeId);
//调用定时器
var timeId = setInterval(clickHandle,2000);
aBox.onmouseover=function () {  //鼠标进入事件，停止轮播
    clearInterval(timeId);
};
aBox.onmouseout=function () {  //鼠标离开，清理定时器开始轮播
    clearInterval(timeId);
    timeId=setInterval(clickHandle,2000);
};