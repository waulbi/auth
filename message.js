import { getCookie } from "https://jscroot.github.io/cookie/croot.js";


let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    window.PostMessage = PostMessage;
}

function PostMessage(){
    let target_url = "https://api.wa.my.id/api/send/message/text";
    let tokenkey = "token";
    let tokenvalue = getCookie("login");
    let datainjson = {
        "to": getValue("to"),
        "isgroup": getValue("isgroup"),
        "messages":getValue("messages")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result){
    setInner("ket","Yeay ini dia token kakak");
    setInner("nama",result.token);
}