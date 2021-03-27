import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataShipList} from '../models/data-ship-list';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  url = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) {
  }

  getShips(url?: string): Observable<DataShipList> {
    return this.http.get<DataShipList>(url ? url : this.url);
  }
}
