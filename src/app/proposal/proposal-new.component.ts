import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {
  pageTitle = 'Create a proposal';
  proposal = new Proposal();
  constructor() {}
  ngOnInit() {}
}
