import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomButtonSelectComponent } from '../components/custom-button-select/custom-button-select.component';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { CustomInputSelectMultiComponent } from '../components/custom-input-select-multi/custom-input-select-multi.component';
import { CustomInputSelectComponent } from '../components/custom-input-select/custom-input-select.component';
import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { CustomLoaderComponent } from '../components/custom-loader/custom-loader.component';
import { CustomModalComponent } from '../components/custom-modal/custom-modal.component';
import { CustomPaginationComponent } from '../components/custom-pagination/custom-pagination.component';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';
import { CustomToastComponent } from '../components/custom-toast/custom-toast.component';
import { SharedRoutingModule } from './shared-routing.module';

const sharedComponents = [
  CustomInputComponent,
  CustomButtonComponent,
  CustomButtonSelectComponent,
  CustomInputSelectComponent,
  CustomInputSelectMultiComponent,
  CustomLoaderComponent,
  CustomModalComponent,
  CustomPaginationComponent,
  CustomTableComponent,
  CustomToastComponent,
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
