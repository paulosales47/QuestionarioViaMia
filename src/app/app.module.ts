import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BdService } from './service/BdService'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
