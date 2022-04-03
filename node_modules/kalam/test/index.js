/**
 * Author  : Ramesh R
 * Created : 7/31/2015 11:09 PM
 * ----------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * ----------------------------------------------------------------------
 */

'use strict';

var utils = require('../'),
    assert = require('assert');

/// Generating UID
var uid = utils.getUid();
utils.log(uid);
assert.ok(uid != null, 'Uid generated');

/// Hex to ASCII
var ascii = utils.hexToString('0xD 0xA');
utils.log(ascii);
assert.ok(ascii != null, 'Converted to Hex');

/// String to Hex
var hex = utils.stringToHex('\r');
utils.log(hex);
assert.ok(hex != null, 'Converted to String');