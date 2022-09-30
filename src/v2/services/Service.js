import axios from "axios";
import Resource, { uriNames } from "../resources/constants";

class Service {
    _headers = { 'Content-Type': 'application/json' };
    constructor(headers) {
        this._headers = headers;
    }
    getFullUri({uri, endpoint, uriName}){
        return `${Resource.api.getUriByName(uriName)}/${endpoint}` 
            ?? `${Resource.api.getUriByName(uriNames.main)}/${endpoint}` 
            ?? `${uri}/${endpoint}`;
    }
    async post({payload, uri = '', endpoint, uriName}) {
        const fullUri=this.getFullUri({uri, endpoint, uriName});
        return await axios.post(fullUri, payload, this._headers)
            .then((response) => {
                return response;
            })
            .catch((error)=>{
                console.log(error);
            });
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