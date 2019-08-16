
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const ele = document.createElement("p");
    ele.innerHTML = string;
    if (htmlElement.children.length === 0) {
        htmlElement.appendChild(ele);
    } else {
        const new_ele = document.createElement("p");
        new_ele.innerHTML = string;
        htmlElement.replaceChild(new_ele, htmlElement.children[0]);
    }
};

htmlGenerator('Party Time.', partyHeader);