import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TaskService {
  constructor(private http: HttpClient) { }

  getAllTasks(){
      return this.http.get("http://localhost:3300/newtask");
  }
}