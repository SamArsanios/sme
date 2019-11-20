import { NgModule } from '@angular/core';
import {MatStepperModule,
        MatButton,
        MatButtonModule} from '@angular/material'

const material =[
  MatStepperModule,
  MatButtonModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }
