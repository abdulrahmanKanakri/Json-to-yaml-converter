// Imports
import JsonToYamlConverter from "./classes/JsonToYamlConverter.js";
import ArrayFormatter from "./classes/ArrayFormatter.js";

// JsonToYamlConverter
const content_func = _ => {
    let jsonTextarea = document.getElementById('jsonTextarea');
    let obj = JSON.parse(jsonTextarea.value);

    let yamlTextarea = document.getElementById('yamlTextarea');
    yamlTextarea.value = JsonToYamlConverter.convert(obj);
}

// ArrayFormatter
const formatArray = () => {
    let string = document.getElementById('arrayInput').value;
    string = new ArrayFormatter(string).format();
    document.getElementById('arrayOutput').value = string;
}

// Make the functions global
window.content_func = content_func;
window.formatArray = formatArray;
window.JsonToYamlConverter = JsonToYamlConverter;