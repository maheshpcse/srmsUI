import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminSidemenuComponent } from './admin/admin-sidemenu/admin-sidemenu.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AdminSidemenuComponent,
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminHomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
