import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'CoolKidsConnect';
  visibleSidebar1 = false;
  items!: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'External Links',
      items: [{
        label: 'Cool Kids Website',
        url: 'https://coolkidscampaign.org/'
      },
        {
          label: 'Donate to Cool Kids Campaign',
          url: 'https://coolkidscampaign.org/donate-now/'
        }
      ]}
    ];
  }

}
