export default class ArrayFormatter {
    constructor(str) {
        this.str = str;
    }

    format() {
        return this.str.replace(/\s+/g, ' ').replace(/=>/g, ' => ').replace(/,/g, ',\n');
    }
}