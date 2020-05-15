export default class JsonToYamlConverter {

    static spaces = '                                        '; // 40 spaces

    static convert(object, spacesNum = 0) {
        return this.parseJsonToYaml('', object, spacesNum);
    }

    static parseJsonToYaml = (str, object, num) => {

        str += this.spaces.substr(0, num) + 'type: object \n';
        if(!Object.keys(object).length) {
            str += this.spaces.substr(0, num) + 'example: {} \n';
            return str;
        }

        str += this.spaces.substr(0, num) + 'properties: \n';

        for(let key in object) {
            str += this.spaces.substr(0, num + 2) + key + ':' + '\n';
            if(typeof object[key] != 'object' || object[key] == null) {
                str += this.spaces.substr(0, num + 4) + 'type: ' + typeof object[key] + '\n';
                str += this.spaces.substr(0, num + 4) + 'example: ' + object[key] + '\n';
            } else {
                str += this.parseJsonToYaml('', object[key], num + 4);
            }
        }

        return str;
    }
}