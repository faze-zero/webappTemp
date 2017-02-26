import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ServicesComponent } from './services/services.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceItemComponent } from './services/service-list/service-item.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
<<<<<<< HEAD
import { DirectivesComponent } from './directives/directives.component';
<<<<<<< HEAD
=======
>>>>>>> 0edf875... shooping and services new components
=======
import { DComponent } from './directives/d/d.component';
import { HighlightDirective } from './directives/highlight.directive';
>>>>>>> 2e5e3e2... Inserting Directive component

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    ServiceListComponent,
    ServiceItemComponent,
    ServiceDetailComponent,
    ShoppingListComponent,
<<<<<<< HEAD
    ShoppingListAddComponent,
<<<<<<< HEAD
    DirectivesComponent
=======
    ShoppingListAddComponent
>>>>>>> 0edf875... shooping and services new components
=======
    DirectivesComponent,
    HighlightDirective
>>>>>>> 2e5e3e2... Inserting Directive component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
