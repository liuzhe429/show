(function () {
    /**
     * jsonp
     * @param {string} url jsonp接口
     * @param {*} data 需要发送的参数
     * @param {string} jsonpcallback jsonpcallback
     * @param {Function} callback 回调函数
     */
    this.jsonp = function (url, data, jsonpcallback, callback) {
        var count = 'cb' + counter++;
        // 生成jsonpcallback后面的变量名
        var callbackName = 'window.jsonp.' + count;

        url = tools.padString(url, data);

        url = tools.padString(url, jsonpcallback + '=' + callbackName);


        window.jsonp[count] = function (data) {
            try {
                callback(data);
            } finally {
                script.parentNode.removeChild(script);
                delete window.jsonp[count];
            }
        };

        var script = document.createElement('script');
        script.src = url;
        script.async = 'async';
        var timer = setInterval(function () {
            if (document.readyState === 'complete') {
                document.body.appendChild(script);
                clearInterval(timer);
            }
        }, 300);
    };

    var counter = 1;

    var tools = {
        encodeToURIString: function (data) {
            if (typeof data === 'string') {
                return data;
            }
            if (typeof  data === 'object') {
                var arr = [];
                for (var n in data) {
                    if (!(data.hasOwnProperty(n))) continue;
                    arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
                }
                return arr.join('&');
            }
            return '';
        },
        padString: function (url, data) {
            data = this.encodeToURIString(data);
            if (!data) {
                return url;
            }
            return url + (/\?/.test(url) ? '&' : '?') + data;
        }
    }
})();