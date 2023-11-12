import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import StartDevice from "./startfunction.js";



let token=getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    window.StartDevice = StartDevice;
}

