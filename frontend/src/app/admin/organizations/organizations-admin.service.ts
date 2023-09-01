import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organization } from 'src/app/organizations/organizations.service';

@Injectable({ providedIn: 'root' })
export class OrganizationsAdminService {

    constructor(protected http: HttpClient) { }

    /** Returns a list of all Organizations
     * @returns {Organization[]}
     */
    list = () => {
        return this.http.get<Organization[]>("/api/organizations");
    }

    /** Creates an organization
     * @param newOrg: Organization object that you want to add to the database
     * @returns {Observable<Organization>}
     */
    createOrganization = (newOrg: Organization) => {
        return this.http.post<Organization>("/api/organizations", newOrg)
    }

    /** Deletes an organization
     * @param org_id: id of the organization object to delete
     * @returns {Observable<Organization>}
     */
    deleteOrganization = (org_id: number) => {
        return this.http.delete<Organization>(`/api/organizations/${org_id}`);
    }
}