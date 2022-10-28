import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PizzaModule} from "./components/pizza.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxsModule} from "@ngxs/store";
import {AngularMaterialModule} from "./shared/angular-material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PizzaModule,
    AngularMaterialModule,
    NgxsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
