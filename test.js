window.getDiagramSize = function () {
    var element = document.getElementById("canvas_layer_div");
    var bounds = element.getBoundingClientRect();
    var size = {};
    size["X"] = bounds.left;
    size["Y"] = bounds.top;
    return size;
}