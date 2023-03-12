import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../Data';
import {HttpClient, HttpHeaders} from "@angular/common/http"

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  private url = "http://localhost:5000/tasks";
  constructor(private http : HttpClient) { }

  getData() : Observable<Data[]>{
    return this.http.get<Data[]>(this.url);
  }

  deleteData(task : Data):Observable<Data> {
    return this.http.delete<Data>(`${this.url}/${task.id}`)
  }

  updateData(task : Data):Observable<Data> {
    const url = `${this.url}/${task.id}`
    return this.http.put<Data>(url, task,httpOptions);
  }

  addData(task : Data): Observable<Data> {
    return this.http.post<Data>(this.url, task, httpOptions);
  }
}
