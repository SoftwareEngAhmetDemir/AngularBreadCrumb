import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
{path: '', redirectTo: 'first', 
pathMatch: 'full'},

{
  path:'first',
data:{
  breadcrumb:'firstPage'
},
component: FirstComponent
  ,
  children:[
   
    {
      path:'second',
      data:{
        breadcrumb:'secondPage'
      },
      component: SecondComponent,
      children:[
        
      {
        path:'third',
        data:{
        breadcrumb:'thirdPage'
        },
        component: ThirdComponent
      
    }
      ]
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
