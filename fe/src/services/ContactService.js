
import HttpClient from './utils/HttpClient';

class ContactServices {

    constructor(){
        this.HttpClient = new HttpClient(`http://localhost:3001`)
    }

    async listContacts(orderBy = 'asc'){

        return this.HttpClient.get(`/contacts?orderBy=${orderBy}`);
    }

}

export default new ContactServices();