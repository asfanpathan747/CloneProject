import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
   {path:"Consultdoctor" ,component:ConsultDoctorComponent},
   {path:"Demo",component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[ConsultDoctorComponent,DemoComponent];
