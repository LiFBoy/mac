'usr strict';

export default  class LocalStorage{
    constructor(){

    }
    static add(key, value) {


        localStorage.setItem(key, value);
    }

    static get(key){
        let _value = localStorage.getItem(key);

        return _value
    }

}