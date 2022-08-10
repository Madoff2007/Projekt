import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { EmployeeComponent } from './pages/employee/employee.component';
import { MainComponent } from "./pages/main/main.component";
import { TechnologyComponent } from './pages/technology/technology.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
