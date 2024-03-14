"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.select = exports.omit = exports.excludeNull = void 0;
function excludeNull(obj) {
    return Object.entries(obj).reduce((newObj, [key, value]) => {
        if (value != null || value != undefined) {
            newObj[key] = value;
        }
        return newObj;
    }, {});
}
exports.excludeNull = excludeNull;
function omit(obj, keys) {
    return Object.entries(obj).reduce((newObj, [key, value]) => {
        if (!keys.includes(key)) {
            newObj[key] = value;
        }
        return newObj;
    }, {});
}
exports.omit = omit;
function select(obj, keys) {
    return Object.entries(obj).reduce((newObj, [key, value]) => {
        if (keys.includes(key)) {
            newObj[key] = value;
        }
        return newObj;
    }, {});
}
exports.select = select;
const replace = (inputString, replacements) => {
    let resultString = inputString;
    for (const [token, replacement] of Object.entries(replacements)) {
        const regex = new RegExp(token, "g");
        resultString = resultString.replace(regex, replacement);
    }
    return resultString;
};
exports.replace = replace;
//# sourceMappingURL=helper.js.map