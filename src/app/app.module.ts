import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddListComponent } from './add-list/add-list.component';
import { ListsComponent } from './lists/lists.component';
import { AllListComponent } from './lists/all-list/all-list.component';
import { ListDetailComponent } from './lists/list-detail/list-detail.component';
import { ListItemComponent } from './lists/all-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddListComponent,
    ListsComponent,
    AllListComponent,
    ListDetailComponent,
    ListItemComponent,
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
