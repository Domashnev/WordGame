import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FieldComponent } from './components/field/field.component';
import { LetterComponent } from './components/letter/letter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
    CommonModule,
		BrowserModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideFunctions(() => getFunctions()),
		provideMessaging(() => getMessaging()),
		provideStorage(() => getStorage()),
		FieldComponent,
    LetterComponent
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
