/* eslint-disable no-sequences */
/* eslint-disable one-var */
/* eslint-disable no-redeclare */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
function solidPlugin(config) {
  if (config === void 0) {
    config = {};
  }
  return function (fp) {
    console.log('solidPlugin loaded!');
    console.log('attached flatpickr instance: ' + fp);

    var plugin = {
      onClose: function () {
        console.log('onClose');
      },
      onParseConfig: function () {
        console.log('onParseConfig');
      },
      onReady: function () {
        console.log('onReady');
      },
      onPreCalendarPosition: function () {
        console.log('onPreCalendarPosition');
        console.log(fp);
      },
      onChange: function () {
        console.log('onChange');
      },
      onDestroy: function () {
        console.log('onDestroy');
      },
      onValueUpdate: function (selDates) {
        console.log('onValueUpdate: ' + selDates);
      }
    };
    return plugin;
  };
}

export default solidPlugin;
