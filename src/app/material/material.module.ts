import { NgModule } from '@angular/core';
import {MatStepperModule,
        MatButton,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule
      } from '@angular/material'

const material =[
  MatStepperModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }