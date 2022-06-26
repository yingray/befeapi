import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PetService } from 'src/api';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [AppComponent, PetsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
