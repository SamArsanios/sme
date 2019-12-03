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
        MatTableModule,
        MatPaginatorModule, 
        MatDatepickerModule,
         MatNativeDateModule
        

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
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule, 
  MatNativeDateModule
]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }