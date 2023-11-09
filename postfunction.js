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
    get(urldevice,responseDevice);

}



function responseData(result){
    setInner("ket","Yeay.. dibawah ini token kakak,terus diatas adalah pair code untuk HP kakak");
    setInner("nama",result.token);
}

function responseDevice(result){
    setInner("judul",result.message);
    if (result.status){
        setInner("avatar", svgpair.replace("#TEXT",result.code) );
    }
    
}

let svgpair=`
<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="15" fill="black">#TEXT#</text>
</svg>
`