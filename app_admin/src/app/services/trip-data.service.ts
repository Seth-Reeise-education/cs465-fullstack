import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { Trip } from '../models/trip';
import { User } from '../models/user';

@Injectable()
export class TripDataService {

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');

    const httpOptions = {                                                  
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`   
      })
    }; 

    return this.http
      .post(this.tripUrl, formData, httpOptions) // pass form data in request body
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError)
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataServce#updateTrip');
    console.log(formData);

    const httpOptions = {                                                  
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`   
      })
    };   

    return this.http
      .put(this.tripUrl + formData.code, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataServices#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
      return this.makeAuthApiCall('login', user); 
    }

    public register(user: User): Promise<AuthResponse> { 
      return this.makeAuthApiCall('register', user); 
    } 

    private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> { 
      const url: string = `${this.apiBaseUrl}/${urlPath}`; 
      return this.http 
        .post(url, user) 
        .toPromise() 
        .then(response => response as AuthResponse) 
        .catch(this.handleError); 
    }
    
  
}
