import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3001/freelance_documents.json';

  constructor(
    /*call Http library as soon as this class is instantiated */
    private http: Http
  ) {}

  getDocuments(): Observable<Document[]> {
    return this.http
      .get(this.documentsUrl)
      .pipe(map((response: Response) => <Document[]>response.json()))
      .pipe(catchError(this.handleError)); /*All operators must be piped*/
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
