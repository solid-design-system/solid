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
        (global.solidFlatpickrPlugin = factory()));
})(this, function () {
  ('use strict');



  function makeFocusable() {
    console.log('makeFocusable');

    const prevMonthBtn = document.querySelector('.flatpickr-prev-month');
    const nextMonthBtn = document.querySelector('.flatpickr-next-month');
    const monthDropdown = document.querySelector('.flatpickr-monthDropdown-months');
    const months = document.querySelectorAll('.flatpickr-monthDropdown-months .flatpickr-monthDropdown-month');
    const yearInput = document.querySelector('input.numInput.cur-year');


    prevMonthBtn.tabIndex = 0;
    nextMonthBtn.tabIndex = 0;
    monthDropdown.tabIndex = 0;
    yearInput.tabIndex = 0;

    prevMonthBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        prevMonthBtn.click();
      }
    });


    nextMonthBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        nextMonthBtn.click();
      }
    });

    monthDropdown.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && monthDropdown.hasFocus) {
        monthDropdown.click();
      }
    });

    months.forEach((month) => {
      month.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          month.click();
        }
      });
    });

  }


  function solidFlatpickrPlugin() {
    return function (fp) {
      console.log('Flatpickr instance: ' + fp);
      return {
        onReady: () => makeFocusable(),

      };
    };
  }

  return solidFlatpickrPlugin;
});

export default solidFlatpickrPlugin;
