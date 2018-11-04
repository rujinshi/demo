window.jQuery = $;
(function () {
  var Util = (function () {
    // 前缀  避免重名
    var prefix = 'html5_reader_';
    var StorageGetter = function (key) {
      return localStorage.getItem(prefix + key);
    }
    var StorageSetter = function (key, val) {
      return localStorage.setItem(prefix + key, val)
    }

    // JSONP跨域封装
    var getBSONP = function (url, callback) {
      return $.jsonp({
        url: url,
        cache: true,
        callback: 'duokan_fiction_chapter',
        success: function (result) {
          // debugger
          // 解码
          var data = $.base64.decode(result)
          var json = decodeURIComponent(escape(data))
          callback(json)
        }
      })
    };


    return {
      getBSONP,
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
  var readerModel
  var readerUI
  var RootContainer = $('#fition_container')
  // 初始化阅读器字体大小
  var inintFontSize = Util.StorageGetter('font_size')
  inintFontSize = parseInt(inintFontSize)
  if (!inintFontSize) {
    inintFontSize = 14
  }
  RootContainer.css('font-size', inintFontSize)


  // 项目的入口函数
  function main() {
    readerModel = ReaderModel()
    readerUI = ReaderBaseFrame(RootContainer)
    readerModel.init(function (data) {
      readerUI(data)
    })
    EventHanlder()
  };


  function ReaderModel() {
    // 与服务器交互数据
    // 内部的全局变量
    var Chapter_id
    var ChapterTotal
    var init = function (UIcallback) {
      getFictionInfo(function () {
        getCurChapterContent(Chapter_id, function (data) {
          //TODO
          UIcallback && UIcallback(data)
        })
      })
    }

    // 获取章节id
    var getFictionInfo = function (callback) {
      $.get('data/chapter.json', function (data) {
        // 获得章节信息之后的回调
        Chapter_id = Util.StorageGetter('last_chapter_id')
        if (!Chapter_id) {
          Chapter_id = data.chapters[1].chapter_id
        }
        ChapterTotal = 4
        // console.log(Chapter_id)
        // 获得章节id之后的回调
        callback && callback();
      }, 'json')
    };

    // 根据章节的id获取章节内容
    var getCurChapterContent = function (chapter_id, callback) {
      $.get('data/data' + chapter_id + '.json', function (data) {
        if (data.result === 0) {
          var url = data.jsonp
          // 跨域JSONP请求
          Util.getBSONP(url, function (data) {
            // debugger
            callback && callback(data)
          })
        }
      }, 'json')
    };

    // 获得上一章内容
    var prevChapter = function (UIcallback) {
      Chapter_id = parseInt(Chapter_id, 10)
      if (Chapter_id === 1) {
        alert('我可是有上限~')
        return;
      }
      Chapter_id -= 1
      getCurChapterContent(Chapter_id, UIcallback)
      Util.StorageSetter('last_chapter_id', Chapter_id)
    };

    // 获得下一章内容
    var nextChapter = function (UIcallback) {
      Chapter_id = parseInt(Chapter_id, 10)
      if (Chapter_id === ChapterTotal) {
        alert('我可是有底线的~')
        return;
      }
      Chapter_id += 1
      getCurChapterContent(Chapter_id, UIcallback)
      Util.StorageSetter('last_chapter_id', Chapter_id)
    };


    return {
      init,
      prevChapter,
      nextChapter
    }
  };

  function ReaderBaseFrame(container) {
    //渲染基本的UI结构
    function parseChapterData(jsonData) {
      var jsonObj = JSON.parse(jsonData)
      var html = `<h4>${jsonObj.t}</h4>`
      for (var i = 0, len = jsonObj.p.length; i < len; i++) {
        html += `<p>${jsonObj.p[i]}</p>`
      }
      return html
    };

    return function (data) {
      container.html(parseChapterData(data))
    };
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
      // console.log(inintFontSize)
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

    // 上一章
    $('#prev_button').click(function () {
      readerModel.prevChapter(function (data) {
        readerUI(data)
      })
    });

    // 下一章
    $('#next_button').click(function () {
      readerModel.nextChapter(function (data) {
        readerUI(data)
      })
    });











  }
  main()

})();