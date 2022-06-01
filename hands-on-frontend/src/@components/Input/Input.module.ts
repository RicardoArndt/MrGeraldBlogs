import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputComponent } from "./Input.component";

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputModule { }
