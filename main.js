function NotifyHatena() {
  var self = this;
  self.refresh();
  window.setInterval(function() { self.refresh(); }, self._refreshTimeout);
}

NotifyHatena.prototype = {

  _offLine: false,
  _refreshTimeout: 60*1000*15,	// 15 minutes
  _feedUrl: 'http://notify.hatena.ne.jp/notices.count.json',

  _setOffline: function() {
    this._offLine = true;
    kango.ui.browserButton.setTooltipText("未ログイン");
    kango.ui.browserButton.setIcon('icons/icon32_gray.png');
    kango.ui.browserButton.setBadgeValue(0);
  },

  _setUnreadCount: function(count) {
    kango.ui.browserButton.setTooltipText("未読数: " + count);
    kango.ui.browserButton.setIcon('icons/icon32.png');
    kango.ui.browserButton.setBadgeValue(count);
  },
  
  isLogin: function(){
    return (this._offLine != false);
  },
  
  clean: function() {
    var self = this;
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
        self._offLine = false;
        var notify = JSON.parse(data.response);
        self._setUnreadCount(notify['count']);
      }
      else {
        self._setOffline();
      }
    });
  }
};

var notifyHatena;
kango.ui.addEventListener(kango.ui.event.Ready, function() {
  if(notifyHatena  == undefined)
    notifyHatena = new NotifyHatena();
  return notifyHatena;
});
