var app = getApp();

/**
 * 对字符串判空
 */
function isStringEmpty(data) {
    if (null == data || "" == data) {
        return true;
    }
    return false;
}

/**
 * 封装网络请求
 */
function sentHttpRequestToServer(url, data, method, successCallback, failCallback, completeCallback) {
    wx.request({
        url: app.data.baseUrl + url,
        data: data,
        method: method,
        header: {
            'Content-Type': 'application/json'
        },
        success: successCallback,
        fail: failCallback,
        complete: completeCallback
    })
}

/**
 * 将map对象转换为json字符串
 */
function mapToJson(map) {
    if (null == map) {
        return null;
    }
    var jsonString = "{";
    for (var key in map) {
        jsonString = jsonString + key + ":" + map[key] + ",";
    }
    if ("," == jsonString.charAt(jsonString.length - 1)) {
        jsonString = jsonString.substring(0, jsonString.length - 1);
    }
    jsonString += "}";
    return jsonString;
}

/**
 * 弹窗提示成功
 */
function toastSuccess() {
    wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
    })
}

function toastFail(message){
    var titleString = (null == message)?"失败":message;
    wx.showToast({
        title: titleString,
        icon: 'warn',
        duration: 2000
    })
}

/**
 * 分割字符串变成数组,字符串以,分割
 */
function stringToArray(toSplit, seperator){
    if ("" == toSplit || null == toSplit){
        return "";
    }
    return toSplit.split(seperator);
}

module.exports = {
    isStringEmpty: isStringEmpty,
    sentHttpRequestToServer: sentHttpRequestToServer,
    mapToJson: mapToJson,
    toastSuccess: toastSuccess,
    stringToArray: stringToArray
}