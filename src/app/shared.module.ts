import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/base-components/drawer/drawer.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/base-components/drawer/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BoxImageComponent } from './components/base-components/box-image/box-image.component';
import { ContactFromComponent } from './components/contact-from/contact-from.component';

const DEFAULT_LANGUAGE = 'he-IL';

const MODULES = [
  DrawerComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  BoxImageComponent,
  ContactFromComponent,
];

@NgModule({
  declarations: [...MODULES],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [...MODULES],
})
export class SharedModule {}
