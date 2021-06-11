import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import { BreadcrumbModule} from "angular8-breadcrumbs";

@NgModule({
  declarations: [			
    AppComponent,
      FirstComponent,
      SecondComponent,
      ThirdComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,  BreadcrumbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
