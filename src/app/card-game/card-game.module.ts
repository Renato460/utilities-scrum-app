import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorCardComponent } from './selector-card/selector-card.component';
import {CardGameComponent} from "./card-game.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from "@angular/material/input";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    SelectorCardComponent,
    CardGameComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    CardGameComponent
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}]
})
export class CardGameModule { }
