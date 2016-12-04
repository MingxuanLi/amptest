import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AvatarsComponent} from './avatars/avatars.component';
import {MaterialModule} from "@angular/material";
import {AvatarsService} from "./services/avatars.service";

import 'hammerjs';
import { CapitalizePipePipe } from './pipes/capitalize-pipe.pipe';
import { LayoutDirective } from './directives/layout-directive.directive';

@NgModule({
    declarations: [
        AppComponent,
        AvatarsComponent,
        CapitalizePipePipe,
        LayoutDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [AvatarsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
