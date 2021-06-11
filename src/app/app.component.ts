import { Component } from '@angular/core';
import { BreadcrumbService } from 'angular8-breadcrumbs';
import { Breadcrumb } from 'angular8-breadcrumbs/lib/breadcrumb/breadcrumb';

interface MenuItem{
url:String,
label:String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  breadcrumbs?: MenuItem[];
 
  constructor(private breadcrumbService: BreadcrumbService) {}
 
  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.breadcrumbs = crumbs.map(c => this.toPrimeNgMenuItem(c));
    });
  }
 
  private toPrimeNgMenuItem(crumb: Breadcrumb) {
    return <MenuItem>{ label: crumb.displayName, url: `#${crumb.url}` };
  }

}
