import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KyubsFaceComponent } from './kyubs-face/kyubs-face.component';
import { KyubsFaceListComponent } from './kyubs-face-list/kyubs-face-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleKyubsFaceComponent } from './single-kyubs-face/single-kyubs-face.component';

@NgModule({
  declarations: [
    AppComponent,
    KyubsFaceComponent,
    KyubsFaceListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleKyubsFaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
