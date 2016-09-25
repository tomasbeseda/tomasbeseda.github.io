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
    append: function(element, content, clear, error) {
        if (clear && element) {
            document.getElementById(element).innerHTML = ' ';
        }
        if (element && content) {
            document.getElementById(element).innerHTML += '<div class="list__item">' + content + '</div>';
        }
        if (element && content && error) {
            document.getElementById(element).innerHTML = '<div class="error-message error-message--red">' + content + '</div>';
        }
    },
    getValue: function(element) {
        return document.getElementById(element).value;
    },
    error: function(number, iteration) {
        var selector = 'error',
            message;
        if (!number && !iteration) {
            message = 'Form cannot be empty';
        } else if (!number) {
            message = 'Base number cannot be empty';
        } else {
            message = 'Iteration cannot be empty';
        }
        App.append(selector, message, null, true);
    },
    clearAppends: function() {
        App.append('increasing', null, true);
        App.append('decreasing', null, true);
        App.append('error', null, true);
        App.append('empty-state', null, true);
    },
    init: function() {
        document.getElementById('count').addEventListener('click', function() {
            App.clearAppends();
            var number = App.getValue('number'),
                iteration = App.getValue('iteration');
            if (number && iteration) {
                App.magic(number, iteration);
            } else {
                App.error(number, iteration);
            }
        });
    }
};
App.init();
