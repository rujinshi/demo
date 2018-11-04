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

  function main() {
    // 整个项目的入口函数
  }


  function ReaderModel() {
    // 实现和阅读器相关的数据交互的方法
  }

  function ReaderBaseFrame() {
    // 渲染基本的UI结构
  }

  function EventHanlder() {
    // 交互事件的绑定
  }

})();