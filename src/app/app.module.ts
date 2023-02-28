import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, NewCmpComponent],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
