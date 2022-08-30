import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core/core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav : CoreService) { }

  ngOnInit(): void {
    this.nav.show()
  }

}
