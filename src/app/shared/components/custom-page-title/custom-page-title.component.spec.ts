import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageTitleComponent } from './custom-page-title.component';

describe('CustomPageTitleComponent', () => {
  let component: CustomPageTitleComponent;
  let fixture: ComponentFixture<CustomPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
