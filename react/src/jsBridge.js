/**
 * Created by sheldon on 17/2/18.
 */

class JsBridge{
    constructor(){}
  static  getJsBridge(){
        function setupWebViewJavascriptBridge(callback) {
            // document.body.innerHTML = 11;
            if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0);
        }
        setupWebViewJavascriptBridge(function(bridge) {
            // document.body.innerHTML = JSON.stringify(bridge);
            window.g_bridge = bridge;
        });
    }
}

JsBridge.getJsBridge();

export default JsBridge