/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-05-31 21:05:57
 * @LastEditors: HWK
 * @LastEditTime: 2020-06-04 21:55:22
 */ 
'use strict';

/**
 * 当取消一个请求时, 需要将Cancel对象作为一个error抛出
 * 
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
    this.message = message;
}

Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};

// 用于标识是一个取消的error
Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;