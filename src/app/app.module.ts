import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {Storage, IonicStorageModule} from '@ionic/storage';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {AppService} from './services/app-service.service';
import {Angular4PaystackModule} from 'angular4-paystack';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';

export function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['localhost: 5000']
    };
}

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory,
                deps: [Storage]
            }
        }),
        Angular4PaystackModule,
    ],
    providers: [
        AppService,
        StatusBar,
        SplashScreen,
        // InAppBrowserOriginal,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        NativePageTransitions,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
