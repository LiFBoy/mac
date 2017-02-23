/**
 * Created by sheldon on 17/2/18.
 */

import LocalStorage from './LocalStorage'
export default class jsBridge {

    constructor() {

    }

    static setTitle(t){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 15, data: {title:t}},
                (response)=>{

                })
    }

    static sendMessageToApp_type_2(type,...id){

        if(id.length==0){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + ''}
                },
                (response)=> {

                })
        }else if(id.length==1){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + '/'+id[0]+''}
                },
                (response)=> {

                })
        }


    }

    static  setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0);
    }

      static getBrideg(cb){

        jsBridge.setupWebViewJavascriptBridge((bridge)=> {
            //document.getElementById("log").innerHTML = "callback1";
            window.g_bridge = bridge;
            cb()
        });

        // return this.brigde;
    }


}
