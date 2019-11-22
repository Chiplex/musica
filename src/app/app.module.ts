import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@components/app/app.component';
import { MusicaComponent } from '@components/musica/musica.component';
import { NotaComponent } from '@components/nota/nota.component';
import { SilencioComponent } from '@components/silencio/silencio.component';
import { RedondaComponent } from '@components/redonda/redonda.component';
import { BlancaComponent } from '@components/blanca/blanca.component';
import { LoginComponent } from '@components/login/login.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { UppercasePipe } from '@pipes/uppercase.pipe';
import { SortPipe } from '@pipes/sort.pipe';
import { LowercasePipe } from '@pipes/lowercase.pipe';
import { PrefixPipe } from '@pipes/prefix.pipe';

import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nota'
  },
  {
    path: 'redonda',
    component: RedondaComponent,
    children: [
      {
        path: 'silencio',
        component: SilencioComponent
      },
      {
        path: 'musica',
        component: MusicaComponent
      }
    ]
  },
  {
    path: 'nota',
    component: NotaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    NotaComponent,
    SilencioComponent,
    RedondaComponent,
    BlancaComponent,
    LoginComponent,
    NavbarComponent,
    UppercasePipe,
    SortPipe,
    LowercasePipe,
    PrefixPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      router,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



