/* eslint-disable no-sequences */
/* eslint-disable one-var */
/* eslint-disable no-redeclare */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

/* This file is an unofficial template for creating a flatpickr plugin.
The code was sourced from the monthSelectPlugin.js file in the flatpickr repo (flatpickr/dist/plugins) 
and adapted to represent a minimal template that demonstrates the basic form a plugin should take.
The eslint-disable comments are to prevent the linter from complaining about the flatpickr code. */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
            ? define(factory)
            : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
                (global.pluginTemplate = factory()));
})(this, function () {
    ('use strict');
    // define any necessary helper functions here

    // define the actual plugin as a function, if using a config object, pass it in as the primary argument
    function pluginTemplate() {
        return function (fp) {
            console.log('Flatpickr instance: ' + fp);
            // return an object containing hooks as keys and corresponding functions or arrays of functions as values
            return {
                // DOCUMENTED HOOKS
                // receive standard args: selectedDates, dateStr, instance
                onChange: () => console.log('onChange'),
                onOpen: () => console.log('onOpen'),
                onClose: () => console.log('onClose'),
                onMonthChange: () => console.log('onMonthChange'),
                onYearChange: () => console.log('onYearChange'),
                onReady: () => console.log('onReady'),
                onValueUpdate: () => console.log('onValueUpdate'),
                // onDayCreate receives unique args: dObj, dStr, fp, dayElem
                onDayCreate: () => console.log('onDayCreate'),
                // UNDOCUMENTED HOOKS
                onParseConfig: () => console.log('onParseConfig'),
                onPreCalendarPosition: () => console.log('onPreCalendarPosition'),
                onKeyDown: () => console.log('onKeyDown'),
                onDestroy: [
                    // feed multiple functions with an array
                    () => console.log('on'),
                    () => console.log('destroy')
                ]
            };
        };
    }

    return pluginTemplate;
});

export default pluginTemplate;