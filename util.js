function getURLParameter(param) {
    var url = window.location.search.substring(1);
    var urlVariables = url.split('&');
    for (var i = 0; i < urlVariables.length; i++) {
        var paramName = urlVariables[i].split('=');
        if (paramName[0] == param) {
            return paramName[1];
        }
    }
}

$(function() {
    var serviceId = '#' + getURLParameter('service');
    $(serviceId).collapse(
        {toggle: true}
    );
});