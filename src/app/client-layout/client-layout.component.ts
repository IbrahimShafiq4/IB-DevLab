import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { InfoMenuComponent } from "./components/info-menu/info-menu.component";

@Component({
    standalone: true,
    selector: 'app-client-layout',
    template: `
        <section class="container min-vh-100 position-relative" [dir]="'rtl'">
            <app-header />
            <div class="row g-1 min-vh-100 align-items-start position-relative">
                <div class="col-lg-3 info-menu top-0">
                    <app-info-menu></app-info-menu>
                </div>
                <div class="col-lg-9 col-md-12 pb-5">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </section>

    `,
    styles: `
        .info-menu {
            position: sticky;

            @media (max-width: 991px) {
                position: relative;
            }
        }
    `,
    imports: [RouterModule, HeaderComponent, InfoMenuComponent]
})

export class ClientLayoutComponent {

}