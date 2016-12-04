import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AvatarsComponent} from './avatars/avatars.component';
import {MaterialModule} from "@angular/material";

import 'hammerjs';import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        AvatarsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
