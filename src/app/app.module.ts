import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MusicaComponent } from './components/musica/musica.component';
import { NotaComponent } from './components/nota/nota.component';
import { SilencioComponent } from './components/silencio/silencio.component';
import { RedondaComponent } from './components/redonda/redonda.component';
import { BlancaComponent } from './components/blanca/blanca.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    NotaComponent,
    SilencioComponent,
    RedondaComponent,
    BlancaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
