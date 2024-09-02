import { postJSON } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";

let urldevice = "http://172.18.0.148:8080/api/device/+" + getCookie("login");

export default function PostSignUp() {
    const button = document.getElementById('btn');

    if (!button) {
        console.error("Button with ID 'btn' not found.");
        return;
    }

    button.addEventListener('click', function() {
        console.log("Button clicked."); // Debug log
        button.setAttribute('disabled', 'true');
        setInner("btn", "Loading...");

        let target_url = "http://172.18.0.148:8080/api/signup";
        let tokenkey = "token";
        let tokenvalue = getCookie("login");

        let datainjson = {
            "url": getValue("url"),
            "secret": getValue("secret")
        };

        console.log("Sending POST request to:", target_url, datainjson); // Debug log
        postJSON(target_url, tokenkey, tokenvalue, datainjson, responseData);
        get(urldevice, responseDevice);
    });
}

function responseData(result) {
    console.log("Response from signup:", result); // Debug log
    if (!result || !result.data) {
        console.error("Invalid response data received.");
        return;
    }
    setInner("judul", "Token dan Pair Code HP");
    setInner("nama", result.data.token);
}

function responseDevice(result) {
    console.log("Response from device:", result); // Debug log
    if (!result) {
        console.error("No response data received.");
        return;
    }

    setInner("ket", result.message);

    if (result.status) {
        let gbr = document.getElementById("gambar");
        if (!gbr) {
            console.error("Element with ID 'gambar' not found.");
            return;
        }
        let cnv = document.createElement('canvas');
        updateCanvas(result.code, cnv);
        gbr.replaceWith(cnv);
    }
}

function updateCanvas(text, c) {
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
    var fontsize = 300;
    do {
        fontsize--;
        ctx.font = fontsize + "px " + fontface;
    } while (ctx.measureText(text).width > c.width)
    ctx.fillText(text, 150, 100);
    console.log(ctx.measureText(text).width);
}
