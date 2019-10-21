import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './service/login.service';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { DepComponent } from './dep/dep.component';
import { saveEventComponent } from './saveevent/saveEvent.component';
import { FilterPipe } from "./pipes/filter.pipe";
import { HighlightTextPipe } from './pipes/highlight-text.pipe';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    HeaderComponent,
    FooterComponent,
    DepComponent,
    saveEventComponent,
    FilterPipe,
    HighlightTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'cities', pathMatch: 'full' },
      { path: 'cities', component: CitiesComponent },
      { path: 'dep', component: DepComponent },
      { path: 'save', component: saveEventComponent },
      { path: 'edit/:id', component: saveEventComponent }
    ])
  ],
  providers: [LoginService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
