import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhoto } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {
  constructor(private client: HttpClient) { 
  }
  get() {
    return this.client.get<IPhoto>('https://api.unsplash.com/photos/random/', {
      headers: {
        Authorization: 
          'Client-ID JbuAZwOurYpKAEcMcx-TpVvPfE2moGta7wTuXFMTJcc'
      }
    });
  }
}
