import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  pageTitle = 'Proposal List';
  proposalOne: Proposal = new Proposal(
    15,
    'Abc Company',
    'http://portfolio.hamfri.com',
    'ROR',
    300,
    130,
    15,
    'hamfri@hamfri.com'
  );
  proposalTwo: Proposal = new Proposal(
    16,
    'any Company',
    'http://portfolio.hamfri.com',
    'ROR',
    100,
    140,
    15,
    'hamfri@hamfri.com'
  );
  proposalThree: Proposal = new Proposal(
    17,
    'xyz Company',
    'http://portfolio.hamfri.com',
    'ROR',
    200,
    110,
    15,
    'hamfri@hamfri.com'
  );
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
  constructor() {}
  ngOnInit() {}
}
