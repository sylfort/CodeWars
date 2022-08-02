"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nthSmallest = void 0;
function nthSmallest(arr, pos) {
    arr.sort(function (a, b) { return a - b; });
    return arr.slice(-pos);
}
exports.nthSmallest = nthSmallest;
nthSmallest([15, 20, 7, 10, 4, 3], 3);
//# sourceMappingURL=nth_smallest_element.js.map