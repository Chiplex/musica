import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MusicaComponent } from './components/musica/musica.component';
import { NotaComponent } from './components/nota/nota.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    NotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
