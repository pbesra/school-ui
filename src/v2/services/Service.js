import axios from "axios";

class Service {
    _headers = { 'Content-Type': 'application/json' };
    constructor(headers) {
        this._headers = headers;
    }
    async post(body, uri = '') {
        return await axios.post(uri, body, this._headers)
            .then((response) => {
                return response;
            })
    }
    async get(uri = '') {
        return await axios.get(uri, this._headers)
            .then((response) => {
                return response;
            }
        );
    }
}
export default Service;