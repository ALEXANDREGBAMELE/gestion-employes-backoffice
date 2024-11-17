import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../core/services/loader.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CustomBasicCrudComponent } from './components/custom-basic-crud/custom-basic-crud.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { CustomDropdownSelectComponent } from './components/custom-dropdown-select/custom-dropdown-select.component';
import { CustomDynamicFormComponent } from './components/custom-dynamic-form/custom-dynamic-form.component';
import { CustomSearchInputComponent } from './components/custom-input-search/custom-input-search.component';
import { CustomInputSelectComponent } from './components/custom-input-select/custom-input-select.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { CustomRadioComponent } from './components/custom-radio/custom-radio.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';
import { CustomToastAlertComponent } from './components/custom-toast-alert/custom-toast-alert.component';
import { SharedRoutingModule } from './shared-routing.module';

const sharedComponents = [
  CustomInputComponent,
  CustomInputSelectComponent,
  CustomModalComponent,
  BreadcrumbComponent,
  CustomSearchInputComponent,
  CustomBasicCrudComponent,
  CustomTextareaComponent,
  CustomToastAlertComponent,
  CustomLoaderComponent,
  CustomTableComponent,
  CustomPaginationComponent,
  CustomButtonComponent,
  CustomDropdownSelectComponent,
  CustomToastAlertComponent,
  CustomDynamicFormComponent,
  CustomCheckboxComponent,
  CustomRadioComponent
]

@NgModule({
  declarations: [
    ...sharedComponents,
    CustomRadioComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...sharedComponents
  ],
  providers: [LoaderService]
})
export class SharedModule { }
