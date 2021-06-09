import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RfsComponent} from './rfs/rfs.component';
@NgModule({
  declarations: [
    AppComponent,
    RfsComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
