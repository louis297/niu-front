import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallary-root',
//   template: `<gallary-root> <h3> Hello gallary </h3> </gallary-root> `,
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class GallaryComponent implements OnInit{
  constructor(
    private router: Router,
  ){}
  title = 'gallary';

  ngOnInit() {

  };
};


@Component({
    selector: 'gallary-detail',
    templateUrl: './gallary.component-detail.html',
    styleUrls: ['./gallary.component-detail.css'],
    // encapsulation: ViewEncapsulation.Native
  })
export class GallaryDetailComponent implements OnInit{

    name: string;
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
      this.route.params.subscribe((params) => this.name = params.name);
    }
  }