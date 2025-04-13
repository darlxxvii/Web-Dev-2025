import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hh-front';
  private http = inject(HttpClient);
  companies: any[] = [];
  vacancies: any[] = [];
  showVacancies = false;

  constructor() {
    this.http.get<any[]>('http://localhost:8000/api/companies/').subscribe(data => {
      this.companies = data;
    });
  }

  loadVacancies(companyId: number) {
    this.http
      .get<any[]>(`http://localhost:8000/api/companies/${companyId}/vacancies`)
      .subscribe(data => {
        this.vacancies = data;
        this.showVacancies = true;
      });
  }
}
