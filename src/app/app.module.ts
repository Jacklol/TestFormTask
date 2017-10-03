import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { FirebaseComponent } from './firedBase.component';
import { DataBaseService } from './dataBaseService';    

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FirebaseComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
