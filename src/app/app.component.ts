import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(
    public config: ConfigService
  ) {

  }

  ngOnInit() {
    // TODO
  }

}
