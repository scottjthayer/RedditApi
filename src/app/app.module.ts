import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleRedditComponent } from './single-reddit/single-reddit.component';
import { EntireRedditComponent } from './entire-reddit/entire-reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleRedditComponent,
    EntireRedditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
