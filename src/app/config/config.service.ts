import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import any = jasmine.any;

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

}
