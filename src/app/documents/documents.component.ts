import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Documents Dashsboard';
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '11/11/2018',
      image_url: 'http://google.com'
    },
    {
      title: 'My second Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '12/11/2018',
      image_url: 'http://google.com'
    },
    {
      title: 'My third Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '13/11/2018',
      image_url: 'http://google.com'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
