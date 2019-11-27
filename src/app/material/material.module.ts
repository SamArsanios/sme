import { NgModule } from '@angular/core';
import {MatStepperModule,
        MatButton,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule
      } from '@angular/material'

const material =[
  MatStepperModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }