class DOMNodeCollection {
    constructor(arrHtml){
        this.arrHtml = arrHtml;
        this.cb = "something"

    };


    html () {
        if (arguments.length !== 0 ) {
            debugger;
            //Come back if there's an error later.
            return this.arrHtml[0].innerHTML = Array.from(arguments)[0]
        }else{
            return this.arrHtml[0].innerHTML
        };
    }


    empty () {
        this.arrHtml.forEach(element => {
            element.innerHTML = "";
        });
    };

    append(el){
        // const  newEl = 
        this.arrHtml.forEach(element => {
            element.innerHTML += el
        });
    };

    attr() {
            if (arguments.length > 1 ) {
                return this.arrHtml[0].setAttribute(...arguments)
            } else {
                return this.arrHtml[0].getAttribute(arguments[0])
            }
    }

    addClass(arg) {
        return this.arrHtml[0].setAttribute("class", arg)
    };

    removeClass() {
        return this.arrHtml[0].removeAttribute("class")
    };


    children() {
        let arr = [];
        this.arrHtml.forEach(element => {
           Array.from(element.childNodes).forEach(element2 => {
               arr.push(element2);
            });
        });

        return new DOMNodeCollection(arr)
    }   

    parent() {
        let arr = [];
        this.arrHtml.forEach(element => {
            // debugger
               arr.push(element.parentNode);
        });

        return new DOMNodeCollection(arr)
    }    


// function html()  {
//     console.log(arguments)
// };
// a = html()

    find(thing){
        let arr = []
        this.arrHtml.forEach(element => {
            // debugger ;
            let col = element.querySelectorAll(thing)
            arr = arr.concat(Array.from(col));
        })
    
        return new DOMNodeCollection(arr)
    };



        remove(){
            this.arrHtml.forEach(element => {
                let all = Array.from(element.childNodes)
                all.forEach(e => {
                    debugger;
                    element.removeChild(e)
                })
            });
        }



        on(event, cb) {
            this.arrHtml.forEach(element => {
                element.addEventListener(event,cb); 
                // debugger
                this.cb = cb
            });
        }

        off(event) {
            this.arrHtml.forEach(element => {
                // debugger
                element.removeEventListener(event, this.cb);
            });
        }



}



module.exports = DOMNodeCollection;