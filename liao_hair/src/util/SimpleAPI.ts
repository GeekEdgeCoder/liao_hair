// TypeScript file

const toPromise = (request) => {
    return new Promise((resolve, reject) => {
        request.addEventListener(egret.ProgressEvent.COMPLETE, (event: egret.Event): void => {
            let response = request.response;
            try {
                response = JSON.parse(request.response);
            } catch (e) {

            } finally {
                resolve(response);
            }
        }, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event: egret.IOErrorEvent): void => {
            reject(event);
        }, this);
    });

}

class HttpClient {
    get(url: string, headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, ) {
        const request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        for (const key of Object.keys(headers)) {
            request.setRequestHeader(key, headers[key]);
        }
        request.send();
        return request;
    }
    post(url: string ,params={}, headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, ) {
        const request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.POST);
        for (const key of Object.keys(headers)) {
            request.setRequestHeader(key, headers[key]);
        }
        request.send(params);
        return request;
    }
}