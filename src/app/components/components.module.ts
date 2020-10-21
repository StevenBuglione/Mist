import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
