(function(root) {
    const lib = {
        accounting: {
            decimal: '.'
        }
    }

    function clean(value, decimal) {

        if (typeof value === 'number') value;

        decimal = decimal || lib.accounting.decimal;

        let pattern = new RegExp('[^0-9-.' + decimal + ']', 'g');

        return parseFloat(value.replace(/\((.*)\)/g, '-$1').replace(pattern, '').replace(decimal, '.'));

    }

    root.clean = clean;

})(window)