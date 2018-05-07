'use strict';
const validCardProperties = [
  { value: 'name', type: "string" },
  { value: 'sender', type: "object" },
  { value: 'createTime', type: "string" },
  { value: 'text', type: "string" },
  { value: 'cards', type: "array" },
  { value: 'previewText', type: "string" },
  { value: 'annotations', type: "array" },
  { value: 'thread', type: "object" },
  { value: 'space', type: "object" },
  { value: 'fallbackText', type: "string" },
  { value: 'actionResponse', type: "object" }
];
require('./polyfill');
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
    validCardProperties.forEach(vcp => {
      {
        if (vcp.value === key && checkType(vcp.type, value)) {
          properties.push({ key, value });
        } else {
          throw new Error(`${key} is not a valid property`);
        }
      }
    })
    return false;
  });

  return properties;
}

function checkType(type, value) {
  return true;
}