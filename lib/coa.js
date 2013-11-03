'use strict';

var PATH = require('path');
var BEM = require('../../bem');

module.exports = require('coa').Cmd()
    .name(PATH.basename(process.argv[1]))
    .apply(require('./{command}'), BEM)
    .completable();
