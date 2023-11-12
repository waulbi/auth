import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";

let urlstartdevice = "https://api.wa.my.id/api/start/device/"+getCookie("login");

export default function StartDevice(){
    const button = document.getElementById('btn');
    button.setAttribute('disabled', '');
    setInner("btn","Loading...");
    get(urlstartdevice,responseStartDevice);
}

function responseStartDevice(result){
    setInner("ket",result.message);
    setInner("btn","Selesai");
    if (result.status){
        let gbr=document.getElementById("gambar");
        let cnv=document.createElement('canvas');
        updateCanvas(result.code,cnv);
        gbr.replaceWith(cnv);
    }   
}

function updateCanvas(text,c) {
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 200);
    ctx.fillStyle = "#212121";
    ctx.fillRect(0, 0, 400, 200)
    var gradient = ctx.createLinearGradient(0, 0, 200, 200);
    gradient.addColorStop(0, '#39FF14');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    var fontface = "Courier";
    ctx.font = "30px Courier";
    ctx.textAlign = 'center';
    // start with a large font size
      var fontsize=300;
      // lower the font size until the text fits the canvas
      do{
          fontsize--;
          ctx.font=fontsize+"px "+fontface;
      }while(ctx.measureText(text).width>c.width)
    ctx.fillText(text, 150, 100);
    console.log(ctx.measureText(text).width);
  }