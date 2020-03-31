import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../_services/authentication/authentication.service';
import {ArticleService} from '../../../_services/article/article.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  userData: any;
  lat: any;
  lng: any;
  mapId = 'roadmap';
  zoom = 5;
  address = '';
  rowData = [];
  constructor(
    private authenticationService: AuthenticationService,
    private articleService: ArticleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userData = this.authenticationService.currentUserSubject.value;
    this.viewMap();
  }
  viewMap() {
    this.lat = 47.7511;
    this.lng = -120.740135;
  }
  submit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
  }
}
