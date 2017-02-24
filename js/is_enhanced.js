if (typeof window.Politics === "undefined") {
    var modernBrowser = ('addEventListener' in window && 'querySelector' in document && 'localStorage' in window),
        isOperaMini = (window.navigator.userAgent.indexOf('Opera Mini/') > -1 && window.navigator.userAgent.indexOf('Presto/') > -1);
    window.Politics = { enhanced: modernBrowser && !isOperaMini };
}