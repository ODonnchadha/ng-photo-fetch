import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../../services/fetch-photo.service';
import { IPhoto } from '../../interfaces/IPhoto';

@Component({
  selector: 'app-fetch-photo-component',
  templateUrl: './fetch-photo-component.html',
  styleUrls: ['./fetch-photo-component.css']
})
export class FetchPhotoComponent implements OnInit {
  url: string;
  constructor(private service: FetchPhotoService) {
    this.fetch();
  }
  onClick(): void {
    this.fetch();
  }
  fetch(): void {
    this.service.get().subscribe((photo: IPhoto) => {
      this.url = photo.urls.regular;
    });
  }
  ngOnInit(): void {
  }
}