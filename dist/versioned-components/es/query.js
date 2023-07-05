import{o}from"./solid-element.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e,r){return o({descriptor:o=>{const t={get(){var o,r;return null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(r){const r="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[r]&&(this[r]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==t?t:null),this[r]}}return t}})}export{e as i};