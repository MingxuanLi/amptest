import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import {AppSettings} from "../../config/app-settings";

@Injectable()
export class AvatarsService {

    constructor(public http: Http) {}

    public getAvatars(filter?: string): Promise<any>{
        let headers = new Headers({
            'ACCESS-KEY': AppSettings.ACCESS_KEY
        });
        let options = new RequestOptions({
            headers: headers
        });
        let url = AppSettings.HOST + AppSettings.BACKEND_ROOT + '/avatars';
        if(filter){
            url += ('?filter=' + filter);
        }
        return this.http.get(url, options)
            .retry(parseInt(AppSettings.HTTP_CALL_RETRY))
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}
