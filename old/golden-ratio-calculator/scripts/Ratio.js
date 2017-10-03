var Ratio = function(elm) {
    this.elm = elm;
};

Ratio.prototype = {
    select(elm) {
        return document.getElementById(elm);
    },
    append(elm, content) {
        return this.select(elm).innerHTML = content;
    },
    getValue(elm) {
        return this.select(elm).value;
    }
}

new Ratio('calculate');
