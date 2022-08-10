import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { MainComponent } from './pages/main/main.component';
import { TechnologyComponent } from './pages/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TechnologyComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
