window.jQuery = $;
(function () {
  var Util = (function () {
    // 增加一个前缀
    var prefix = 'html5_reader_';
    var StorageGetter = function (key) {
      return localStorage.getItem(prefix + key);
    }
    var StorageSetter = function (key, val) {
      return localStorage.setItem(prefix + key, val)
    }
    return {
      StorageGetter,
      StorageSetter
    }
  })();

  // 存放节点
  var Dom = {
    top_nav: $('#top-nav'),
    bottom_nav: $('.bottom_nav'),
    font_container: $('.font-container'),
    font_button: $('#font_button')
  }
  var Win = $(window)
  var Doc = $(document)
  var RootContainer = $('#fition_container')
  // 初始化阅读器字体大小
  var inintFontSize = Util.StorageGetter('font_size')
  inintFontSize = parseInt(inintFontSize)
  if (!inintFontSize) {
    inintFontSize = 14
  }
  RootContainer.css('font-size', inintFontSize)



  function main() {
    // 整个项目的入口函数
    EventHanlder()
  };


  function ReaderModel() {
    // 实现和阅读器相关的数据交互的方法
  };

  function ReaderBaseFrame() {
    // 渲染基本的UI结构
  };

  function EventHanlder() {


    // 唤出字体面板
    Dom.font_button.click(function () {
      if (Dom.font_container.css('display') == 'none') {
        Dom.font_container.show()
        Dom.font_button.addClass('current')
      } else {
        Dom.font_container.hide()
        Dom.font_button.removeClass('current')

      }
    });


    $('#night_button').click(function () {
      // 触发背景切换的事件

    })

    // 字体放大
    $('#large-font').click(function () {
      if (inintFontSize > 19) {
        return;
      }
      inintFontSize += 1
      console.log(inintFontSize)
      RootContainer.css('font-size', inintFontSize)
      // 存入localStorage
      Util.StorageSetter('font_size', inintFontSize)

    });

    // 字体缩小
    $('#small-font').click(function () {
      if (inintFontSize < 12) {
        return;
      }
      inintFontSize -= 1
      RootContainer.css('font-size', inintFontSize)
      // 存入localStorage
      Util.StorageSetter('font_size', inintFontSize)
    });





    // 屏幕滚动隐藏上下边栏
    Win.scroll((function () {
      Dom.top_nav.hide()
      Dom.bottom_nav.hide()
      Dom.font_container.hide()
      Dom.font_button.removeClass('current')
    }));

    // 点击屏幕中间唤出上下边栏
    $('#action_mid').click(function () {
      if (Dom.top_nav.css('display') == 'none') {
        Dom.top_nav.show()
        Dom.bottom_nav.show()
      } else {
        Dom.top_nav.hide()
        Dom.bottom_nav.hide()
        Dom.font_container.hide()
        Dom.font_button.removeClass('current')
      }
    });










  }
  main()

})();