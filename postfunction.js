import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";

let urldevice = "https://api.wa.my.id/api/device/"+getCookie("login");

export default function PostSignUp(){
    let target_url = "https://api.wa.my.id/api/signup";
    let tokenkey = "token";
    let tokenvalue = getCookie("login");
    let datainjson = {
        "url": getValue("url"),
        "secret": getValue("secret")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}



function responseData(result){
    setInner("ket","Yeay ini dia token kakak");
    setInner("nama",result.token);
    get(urldevice,responseDevice);
}

function responseDevice(results){
    setInner("judul","PAIR CODE: "+result.code);
}
