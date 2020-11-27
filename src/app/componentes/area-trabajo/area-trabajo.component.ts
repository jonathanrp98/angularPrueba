import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-area-trabajo',
  templateUrl: './area-trabajo.component.html',
  styleUrls: ['./area-trabajo.component.css']
})
export class AreaTrabajoComponent implements OnInit {
  private route: string;

  constructor( location: Location, private router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
  }

  ngOnInit(): void {
  }

}
