/**
 * Created by sheldon on 17/2/18.
 */

import LocalStorage from './LocalStorage'
import {Toast} from './utils'
export default class jsBridge {

    constructor() {

    }

    static setTitle(t){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 15, data: {title:t}},
                (response)=>{

                })
    }

    static sendMessageToApp_type_2(type,...option){

        if(option.length==0){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + ''}
                },
                (response)=> {

                })
        }else if(option.length==1){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + '/'+option[0]+''}
                },
                (response)=> {

                })
        }else if(option.length==2){
            const [id,name] =option;
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + '/'+id+'/'+name+''}
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

    static  uploadImg(cb){


        window.g_bridge.callHandler('sendMessageToApp', {type:17, data:{accessToken:LocalStorage.get('token')}}, (response)=> {



            if (response.code == 0) {





                cb(response.ids);

                // document.body.innerHTML=333


            } else {
                Toast.toast(response.desc, 3000)
            }
        });
    }


}
