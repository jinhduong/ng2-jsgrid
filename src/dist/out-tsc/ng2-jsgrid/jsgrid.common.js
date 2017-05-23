"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = (function () {
    function Common() {
    }
    Common.gridIsEmpty = function ($grid) {
        if (!$grid)
            return true;
        return $grid.html() === '';
    };
    return Common;
}());
exports.Common = Common;
;
//# sourceMappingURL=jsgrid.common.js.map