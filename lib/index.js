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
module.exports = function (obj) {
    var isValid = false;
    var properties = [];

    properties = validProperties(obj, validCardProperties);
    if (properties.length > 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
};

function validProperties(obj, validCardProperties) {
    let properties = [];
    let error = false;
    Object.entries(obj).map(function ([key, value]) {
        if (validCardProperties.includes(key)) {
            properties.push({ key, value });
        } else {
            error = true;
        }
        return true;
    });

    if (error) {
        properties = [];
    }
    return properties;
}
