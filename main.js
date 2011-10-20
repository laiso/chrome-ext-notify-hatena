function NotifyHatena() {
  var self = this;
  self.refresh();
  window.setInterval(function(){self.refresh()}, self._refreshTimeout);
  chrome.browserAction.onClicked.addListener(function(tab){ alert(1) });
}

NotifyHatena.prototype = {

  /_refreshTimeout: 60*1000*15,	// 15 minutes
  _feedUrl: 'http://notify.hatena.ne.jp/notices.count.json',

  _setOffline: function() {
    kango.ui.browserButton.setTooltipText("オフライン");
    kango.ui.browserButton.setIcon('icons/icon16_gray.png');
    kango.ui.browserButton.setBadgeValue(0);
  },

  _setUnreadCount: function(count) {
    kango.ui.browserButton.setTooltipText("未読数: " + count);
    kango.ui.browserButton.setIcon('icons/icon16.png');
    kango.ui.browserButton.setBadgeValue(count);
  },
  
  clean: function() {
    self._setUnreadCount(0);
  },

  refresh: function() {
    var details = {
      url: this._feedUrl,
      method: 'GET',
      async: true,
      contentType: 'text'	
    };
    var self = this;
    kango.xhr.send(details, function(data) {
      if(data.status == 200 && data.response != null) {
        var notify = JSON.parse(data.response);
        self._setUnreadCount(notify['count']);
      }
      else {
        self._setOffline();
      }
    });
  }
};

kango.ui.addEventListener(kango.ui.event.Ready, function() {
  return new NotifyHatena();
});
