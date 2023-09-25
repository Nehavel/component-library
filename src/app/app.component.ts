import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-library';
  activeTab: any;
  selectedTab(tab: any){
    this.activeTab = tab;
  }
}
