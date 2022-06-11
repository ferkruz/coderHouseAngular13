import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoundBlockDirective } from './shared/directives/round-block.directive';
import { ResaltarDirective } from './shared/directives/resaltar.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

import { FancyToasterModule } from './fancy-toaster/fancy-toaster.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersComponent } from './users/users.component';
import { TableUSerComponent } from './users/table-user/table-user.component';
import { GridUserComponent } from './users/grid-user/grid-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    FormComponent,
    RoundBlockDirective,
    ResaltarDirective,
    UsersComponent,
    TableUSerComponent,
    GridUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FancyToasterModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
