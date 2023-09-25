import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
@Output() valueChange = new EventEmitter();
activeTab = 'Download/ Upload';
tabs = ['Download/ Upload', 'Search Autocomplete', 'Web Component', 'Progressive web app', 'Date Picker'];
selectedTab(tab: string){
  this.activeTab = tab;
  this.valueChange.emit(tab);
}
}
