import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  entries = [
    { resolved_url: "sdf", resolved_title: "q"},
    { resolved_url: "sdf", resolved_title: "1"}
  ];
}
