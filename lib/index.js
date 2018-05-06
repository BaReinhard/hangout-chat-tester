'use strict';
const validCardProperties = [
    'name',
    'sender',
    'createTime',
    'text',
    'cards',
    'previewText',
    'annotations',
    'thread',
    'space',
    'fallbackText',
    'actionResponse'
];
if (!Object.entries)
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
module.exports = function (obj, throwError = false) {
    var isValid = true;
    var properties = [];
    try {
        properties = validProperties(obj, validCardProperties);
    } catch (err) {
        if (throwError) {
            throw err;
        }
    }
    if (properties.length > 0) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
};

function validProperties(obj, validCardProperties) {
    let properties = [];
    Object.entries(obj).map(function ([key, value]) {
        if (validCardProperties.includes(key)) {
            properties.push({ key, value });
        } else {
            throw new Error(`${key} is not a valid property`);
        }
        return false;
    });

    return properties;
}
