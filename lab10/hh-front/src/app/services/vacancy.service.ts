import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000/api/';

  constructor(private client: HttpClient) {}

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}companies/${companyId}/vacancies/`);
  }
}
