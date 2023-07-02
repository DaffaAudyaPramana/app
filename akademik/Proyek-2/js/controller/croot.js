import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import {rowtabel, svg, eml} from "../template/tabel.js";
import { URLProyek2 } from "../config/url.js";
get(URLProyek2, tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let email = eml.replace("#col#", getRandomColorName());
    console.log(email);
    row = rowtabel.replace("#nama#", element.nama).
        replace("#gender#", element.gender).
        replace("#eml#", email).
        replace("#nohp#", element.nohp).
        replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}