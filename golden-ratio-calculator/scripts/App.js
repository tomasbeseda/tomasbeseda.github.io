var App = {
    magic: function(number, iteration) {
        var PHI = 1.618,
            increase = number,
            decrease = number;
        App.append('increasing', '<h2 class="typo">Increasing</h2>');
        App.append('decreasing', '<h2 class="typo">Decreasing</h2>');
        for (var i = 0; i < iteration; i++) {
            increase = increase * PHI;
            decrease = decrease / PHI;
            App.append('increasing', increase);
            App.append('decreasing', decrease);
        }
    },
    append: function(element, content, clear) {
        if (clear && element) {
            document.getElementById(element).innerHTML = ' ';
        }
        if (element && content) {
            document.getElementById(element).innerHTML += '<div class="list__item">' + content + '</div>';
        }
    },
    getValue: function(element) {
        return document.getElementById(element).value;
    },
    init: function() {
        document.getElementById('count').addEventListener('click', function() {
            App.append('increasing', null, true);
            App.append('decreasing', null, true);
            var number = App.getValue('number'),
                iteration = App.getValue('iteration');
            if (number && iteration) {
                App.magic(number, iteration);
            }
        });
    }
};
App.init();
