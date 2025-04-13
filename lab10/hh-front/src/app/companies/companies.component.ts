import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { VacancyService } from '../services/vacancy.service';
import { Company } from '../interfaces/company';
import { Vacancy } from '../interfaces/vacancy';

@Component({
  selector: 'app-companies',
  imports: [],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number) {
    this.selectedCompanyId = companyId;
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}
