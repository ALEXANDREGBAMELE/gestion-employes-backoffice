import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { BaseService } from '../services/base.service';

@Injectable({
    providedIn: 'root',
})
export class EmployeService extends BaseService<Employee> {
    constructor(http: HttpClient) {
        super(http, '/api/employes'); // Base URL spécifique
    }
}
