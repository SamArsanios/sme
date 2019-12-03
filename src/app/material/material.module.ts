import { NgModule } from '@angular/core';
import {MatStepperModule,
        MatButton,
        MatTabsModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule, 
        

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
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatTabsModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }