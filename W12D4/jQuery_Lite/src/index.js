const DOMNodeCollection = require("./dom_node_collection.js")

document.addEventListener("DOMContentLoaded", () => {

    const $l = window.$l = function (arg) {    
        if ( typeof arg  === "string" ){
            return fetchDomNodes(arg)
        };
    }      
});


const fetchDomNodes = (selectors) => {
    const NodeList = document.querySelectorAll(selectors);
    const arr = Array.from(NodeList);
    return new DOMNodeCollection(arr);
}

