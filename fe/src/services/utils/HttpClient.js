import delay from "../../utils/delay";

class HttpClient {

    constructor(BaseUrl){
        this.BaseUrl = BaseUrl
    }
    
    async get(path){
        
        const response = await fetch(`${this.BaseUrl}${path}`)

        await delay(500);

        return response.json();
    }
}

export default HttpClient