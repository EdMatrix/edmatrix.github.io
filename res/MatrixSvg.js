/* Module: MatrixSvg
Generates EdMatrix SVG images.
*/

function newSvgEle(nm, attrs, ...children) {
    let ele = document.createElementNS("http://www.w3.org/2000/svg", nm);
    if (attrs !== undefined) {
        for (let key in attrs) {
            ele.setAttribute(key, attrs[key]);
        }
    }
    if (children.length == 1 && typeof(children[0]) == "string") {
        ele.textContent = children[0];
    }
    else {
        for (let child of children) {
            ele.appendChild(child);
        }
    }
    return ele;
}

function toRanges(a) {
    a.sort(function(x,y) {return x - y});
    let result = [];
    let len = a.length;
    for (let i=0; i<len; ++i) {
        let f = a[i];
        while (i<len-1 && a[i+1] == a[i]+1) ++i;
        result.push({first: f, last: a[i]});
    }
    return result;
}

function typesToIndexes(types) {
    let tts = [];
    for (let t of types) {
        switch(t) {
            case "Organizational":
                tts.push(0);
                break;
            case "Personal":
                tts.push(1);
                break;
            case "Event":
                tts.push(2);
                break;
            case "Achievement":
                tts.push(3);
                break;
            case "Credential":
                tts.push(4);
                break;
            case "Competency":
                tts.push(5);
                break;
            case "Content Metadata":
                tts.push(6);
                break;
            case "Content":
                tts.push(7);
                break;
            // If not found, don't add anything to the array
        }
    }
    return tts;
}

const tmxBias = 720;
const tmxWidth = 160;
const tmxInterval = 240;
const tmyBias = 320;
const tmyHeight = 64;
const tmyInterval = 144;
const tmPadding = 32;
const tmRadius = tmPadding;
const tmStrokeWidth = 8;

class MatrixSvg {

static getMatrix(w, withText = false) {
    let svgEle = newSvgEle("svg", {viewBox: "0 0 1904 1440"},
        //newSvgEle("rect", {width: "100%", height: "100%", fill: "gray"}),
        newSvgEle("rect", {x: 288, y: 320, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 464, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 608, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 752, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 896, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 1040, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 1184, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 1328, width: 1600, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 128, y: 536, width: 384, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 16, y: 824, width: 528, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 128, y: 1112, width: 384, height: 64, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 128, y: 536, width: 80, height: 640, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 320, width: 80, height: 496, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 288, y: 896, width: 80, height: 496, fill: "#B0C6E1"}),
        newSvgEle("rect", {x: 960, y: 16, width: 160, height: 1408, fill: "#C0504D", "fill-opacity": 0.4}),
        newSvgEle("rect", {x: 1200, y: 16, width: 160, height: 1408, fill: "#C0504D", "fill-opacity": 0.4}),
        newSvgEle("rect", {x: 1440, y: 16, width: 160, height: 1408, fill: "#C0504D", "fill-opacity": 0.4}),
        newSvgEle("rect", {x: 1680, y: 16, width: 160, height: 1408, fill: "#C0504D", "fill-opacity": 0.4})
    );
    svgEle.style.width = w;

    if (withText) {
        svgEle.style="font-family: Calibri,Calibri_MSFontService,Arial,sans-serif; font-weight: normal; font-size: 48px;";
        svgEle.appendChild(newSvgEle("text", {x: 40, y: 872}, "Learning Data Standards"));
        svgEle.appendChild(newSvgEle("text", {x: 152, y: 584}, "Stakeholder Data"));
        svgEle.appendChild(newSvgEle("text", {x: 152, y: 1160}, "Content Data"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 368}, "Organizational Data"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 512}, "Personal / Identity Data"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 656}, "Event Data"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 800}, "Achievement Assertions"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 944}, "Credential Data Model"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 1088}, "Competency Data Model"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 1232}, "Content Metadata"));
        svgEle.appendChild(newSvgEle("text", {x: 312, y: 1376}, "Content Packaging & Integration"));

        svgEle.appendChild(newSvgEle("text", {x: 1048, y: 32, transform: "rotate(90, 1048, 32)"},
            newSvgEle("tspan", undefined, "1. Data"),
            newSvgEle("tspan", {x: 1048, dy: "1em"}, "Dictionary")));
        svgEle.appendChild(newSvgEle("text", {x: 1288, y: 32, transform: "rotate(90, 1288, 32)"},
            newSvgEle("tspan", undefined, "2. Logical"),
            newSvgEle("tspan", {x: 1288, dy: "1em"}, "Data Model")));
        svgEle.appendChild(newSvgEle("text", {x: 1504, y: 32, transform: "rotate(90, 1504, 32)"},
            newSvgEle("tspan", undefined, "3. Serialization")));
        svgEle.appendChild(newSvgEle("text", {x: 1744, y: 32, transform: "rotate(90, 1744, 32)"},
            newSvgEle("tspan", undefined, "4. Protocol")));
        //transform="matrix(6.12323e-17 1 -1 6.12323e-17 1036.6 25)">1. Data<tspan font-size="48" x="-3.55148e-15" y="58">Dictionary</tspan>

    }

    return svgEle;
}

static getStandardMatrix(standard, w, withText = false) {
    let svgEle = MatrixSvg.getMatrix(w, withText);
    const tix = toRanges(typesToIndexes(standard.types));
    const lix = toRanges(standard.datalayers);
    for (let ti of tix) {
        for (let li of lix) {
            let xx = tmxBias + tmxInterval * li.first - tmPadding;
            let yy = tmyBias + tmyInterval * ti.first - tmPadding;
            let xw = (li.last-li.first) * tmxInterval + tmxWidth + tmPadding*2;
            let yh = (ti.last-ti.first) * tmyInterval + tmyHeight + tmPadding*2;
            svgEle.appendChild(newSvgEle("rect", {x: xx, y: yy, width: xw, height: yh, rx: tmRadius, fill: "#953735", "fill-opacity": 0.6, stroke: "black", "stroke-width": tmStrokeWidth}));
        }
    }
    return svgEle;
}

}

export default MatrixSvg;