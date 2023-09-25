import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatInputModule
} from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SideNavComponent } from './side-nav/side-nav.component';
import { InfoContentComponent } from './info-content/info-content.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    InfoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports:[SideNavComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
