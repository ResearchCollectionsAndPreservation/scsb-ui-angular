
import { HttpHeaders } from "@angular/common/http";

export class appConfig {

    public static getHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json'
        });
    }

}