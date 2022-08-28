import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { MainComponent } from './pages/main/main.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { FormsModule } from "@angular/forms";
import { TechnologyvikdataComponent } from "./pages/technologyvikdata/technologyvikdata.component";
import { TechnologyvikComponent } from "./pages/technologyvik/technologyvik.component";
import { TechnologyykComponent } from "./pages/technologyyk/technologyyk.component";
import { TechnologyykdataComponent } from "./pages/technologyykdata/technologyykdata.component";
import { TechnologypkComponent } from "./pages/technologypk/technologypk.component";
import { TechnologypkdataComponent } from "./pages/technologypkdata/technologypkdata.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TechnologyComponent,
    EmployeeComponent,
    TechnologyvikdataComponent,
    TechnologyvikComponent,
    TechnologyykComponent,
    TechnologyykdataComponent,
    TechnologypkComponent,
    TechnologypkdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
