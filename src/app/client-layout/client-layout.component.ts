import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { InfoMenuComponent } from "./components/info-menu/info-menu.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

@Component({
    standalone: true,
    selector: 'app-client-layout',
    template: `
        <section class="container min-vh-100 position-relative" [dir]="'rtl'">
            <div class="header-selector">
                <app-header />
            </div>
            <div class="row g-1 min-vh-100 align-items-start position-relative">
                <div class="col-lg-3 info-menu top-0">
                    <app-info-menu></app-info-menu>
                </div>
                <div class="col-lg-9 col-md-12 pb-5">
                    <router-outlet></router-outlet>
                </div>
                <!-- <div class="col-lg-3 col-md-12 side-menu top-0">
                    <app-side-menu></app-side-menu>
                </div> -->
            </div>
        </section>

    `,
    styles: `
        .container {
            @media (max-width: 767px) {
                padding-inline: 30px;
            }
        }
        .header-selector {
            position: relative;
            z-index: 999;
        }
        .info-menu, .side-menu {
            position: sticky;
            z-index: 1;
            @media (max-width: 991px) {
                position: relative;
            }
        }
    `,
    imports: [RouterModule, HeaderComponent, InfoMenuComponent, SideMenuComponent]
})

export class ClientLayoutComponent {

}