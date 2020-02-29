import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllnewsComponent } from './allnews/allnews.component';
import { DetailednewsComponent } from './detailednews/detailednews.component';


const routes: Routes = [
  {path:'' , component : AllnewsComponent},
  {path:'home' , component : AllnewsComponent},
  
  {path : 'news/:id' , component: DetailednewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
