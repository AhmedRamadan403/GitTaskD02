(function(){
    var LocalStorage = {
        length: ()=>{return document.cookie.split(";").length},
        getItem:function(key){
            var cookies = document.cookie.split(";");
            var Value;
            for (let i = 0; i < cookies.length; i++) {
                if ((cookies[i].split("=")[0].trim()) == key) {
                    Value =cookies[i].split("=")[1].trim();
                }
            }
            return Value;
        },
        setItem:function(key,value){
            document.cookie = `${key}=${value}`;
        },
        removeItem:function(key){
            var exDate = new Date()
            exDate.setMonth(exDate.getMonth()-6);
            var value = LocalStorage.getItem(key);
            document.cookie = `${key}=${value};expires=${exDate.toUTCString()}`;
        },
        clear:function(){
            var cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                LocalStorage.removeItem(cookies[i].split("=")[0].trim());
            }
        },
        key:function(index){
            if (document.cookie.split(";").length > index ) {
                return document.cookie.split(";")[index].split("=")[0].trim();
            } else {
                return null;
            }
        },
    }
    window.local = LocalStorage;
})()

