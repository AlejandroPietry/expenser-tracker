export default class{
    static BuildHeaders(){
        let headers = {};
            headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
            headers['Content-Type'] = 'application/json';
            return headers;
    }
    
    static buildHeadersGet(){
		let headers = {
			method:'GET',
			headers: {'Authorization':`Bearer ${localStorage.getItem('jwtToken')}`}
		};
		return headers;
	}

    static httpPost = (url, data) => fetch(url, {
        method :'POST',
        headers : this.BuildHeaders(),
        body: JSON.stringify(data)
    });
    
    static httpGet = (url) => fetch(url, {
        method: 'GET',
        headers : this.BuildHeaders()
    });

}
