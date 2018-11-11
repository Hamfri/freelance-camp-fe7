import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = 'Documents Dashsboard';
  documents: Document[];
  errorMessage: string;
  /* Mockup data for UI dev
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '11/11/2018',
      image_url:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557'
    },
    {
      title: 'My second Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '12/11/2018',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoggIq-2P0UFNLJaY0Me_LuAceuj9XGWW0iYdXN40qxgRjtoA'
    },
    {
      title: 'My third Doc',
      description: 'seefeefefe efefef ee',
      file_url: 'http://google.com',
      updated_at: '13/11/2018',
      image_url:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/free-stock-photography-pixabay.jpg?v=1512762557'
    }
  ];
 */
  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    let time = timer(0, 5000);
    time.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService
      .getDocuments()
      .subscribe(
        documents => (this.documents = documents),
        error => (this.errorMessage = <any>error)
      );
  }
}
