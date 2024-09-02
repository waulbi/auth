import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import { postJSON } from "https://jscroot.github.io/api/croot.js";

let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    window.PostMessage = PostMessage;
}

function PostMessage(){
    const button = document.getElementById('btn');
    button.setAttribute('disabled', '');
    setInner("btn","Loading...");
    let target_url = "https://gw.ulbi.ac.id/api/send/message/text";
    let tokenkey = "token";
    let tokenvalue = getCookie("login");
    let datainjson = {
        "to": getValue("to"),
        "isgroup": document.getElementById("isgroup").checked,
        "messages":getValue("messages")
    }

    postJSON(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result){
    setInner("ket","Yeay id terkirim nya di bawah");
    setInner("nama",result.data.response);
}