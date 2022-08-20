import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { EmployeeComponent } from './pages/employee/employee.component';
import { MainComponent } from "./pages/main/main.component";
import { TechnologyComponent } from './pages/technology/technology.component';
import { TechnologyvikComponent } from './pages/technologyvik/technologyvik.component';
import { TechnologyvikdataComponent } from './pages/technologyvikdata/technologyvikdata.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'technologyvik',
    component: TechnologyvikComponent
  },
  {
    path: 'technologyvikdata',
    component: TechnologyvikdataComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
