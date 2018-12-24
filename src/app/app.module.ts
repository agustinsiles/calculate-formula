import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
	declarations: [
		MyApp,
		HistoryPage,
		HomePage,
		TabsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HistoryPage,
		HomePage,
		TabsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		NativeAudio,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {}
