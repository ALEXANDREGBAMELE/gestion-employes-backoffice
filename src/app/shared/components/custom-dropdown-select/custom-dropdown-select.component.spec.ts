import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownSelectComponent } from './custom-dropdown-select.component';

describe('CustomDropdownButtonComponent', () => {
  let component: CustomDropdownSelectComponent;
  let fixture: ComponentFixture<CustomDropdownSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDropdownSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDropdownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
