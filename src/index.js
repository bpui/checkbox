'use strict';

/**
* Copyright (c) 2020 Copyright bp All Rights Reserved.
* Author: lipengxiang
* Date: 2020-02-17 14:52
* Desc: 
*/

import bpLibs from "@bpui/libs";
import bpCheckbox from './checkbox.vue';

// register alias icon.
function init() {
  bpLibs.icons.registerAliasIcon('bp-checkbox_checked', 'ok');
}
init();

export default {
  init,
  bpCheckbox,
}
