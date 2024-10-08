import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { CustomButtonSelectComponent } from '../components/custom-button-select/custom-button-select.component';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { CustomSearchInputComponent } from '../components/custom-input-search/custom-input-search.component';
import { CustomInputSelectMultiComponent } from '../components/custom-input-select-multi/custom-input-select-multi.component';
import { CustomInputSelectComponent } from '../components/custom-input-select/custom-input-select.component';
import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { CustomModalComponent } from '../components/custom-modal/custom-modal.component';
import { CustomPaginationComponent } from '../components/custom-pagination/custom-pagination.component';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';
import { CustomToastComponent } from '../components/custom-toast/custom-toast.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { SharedRoutingModule } from './shared-routing.module';

const sharedComponents = [
  CustomInputComponent,
  CustomButtonComponent,
  CustomButtonSelectComponent,
  CustomInputSelectComponent,
  CustomInputSelectMultiComponent,
  LoaderComponent,
  CustomModalComponent,
  CustomPaginationComponent,
  CustomTableComponent,
  CustomToastComponent,
  BreadcrumbComponent,
  CustomSearchInputComponent
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
  ],
  providers: [LoaderService]
})
export class SharedModule { }
