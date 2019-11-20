import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material'

const material =[
  MatStepperModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }
