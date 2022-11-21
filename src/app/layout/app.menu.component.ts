import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService, AuthUser } from "../auth/auth.service";
import { Observable } from "rxjs"

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})

export class AppMenuComponent implements OnInit {
    model: any[] = [];
    subscription;

    constructor(
        public layoutService: LayoutService, private authService: AuthService
    ) { }

    ngOnInit() {
        this.updateMenu();
        this.subscribeAuthService();
    }

    updateMenu(user?: AuthUser) {
        let userMenu = {
            label: "Account",
            items: [
                { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
                { label: 'Register', icon: 'pi pi-fw pi-user-plus', routerLink: ['/register'] },
            ]
        };

        if (user) {
            userMenu = {
                label: "Login as: " + user.name,
                items: [
                    { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/profile'] },
                    { label: 'Logout', icon: 'pi pi-fw pi-sign-out', routerLink: ['/logout'] },
                ]
            };
        }

        this.model = [
            userMenu,  
            {
                label: 'Main Menu',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/homepage'] },
                    { label: 'Events', icon: 'pi pi-fw pi-calendar', routerLink: ['/events'] },
                    
                    { label: 'User Management', icon: 'pi pi-fw pi-users', routerLink: ['/usermanagement'] },
                    { label: 'Helps', icon: 'pi pi-fw pi-question-circle', routerLink: ['/help'] },
                ]
            },

            {
                label: 'External Links',
                items: [
                    { label: 'Cool Kids Website', icon: 'pi pi-fw pi-home', url: ['https://coolkidscampaign.org'], target: '_blank' },
                    { label: 'Donate to Cool Kids Campaign', icon: 'pi pi-fw pi-money-bill', url: ['https://coolkidscampaign.org/donate-now/'], target: '_blank' }
                ]
            }
        ];
    }

    subscribeAuthService() {
        this.subscription = this.authService.user$.subscribe((user: AuthUser) => {
            this.updateMenu(user)
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
