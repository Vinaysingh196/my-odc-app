import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOdcLayoutComponent } from './features/my-odc-layout/my-odc-layout.component';
import { OdcHeaderComponent } from './features/my-odc-layout/odc-header/odc-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyOdcLayoutComponent,
    OdcHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
