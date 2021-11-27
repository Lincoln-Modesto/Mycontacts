export default class APIErrror extends Error{
    constructor(response, body){
        super()

        this.name = 'APIError'
        this.response = response
        this.message =  body?.error || `${response.status} - ${response.statusText}`
    }
}