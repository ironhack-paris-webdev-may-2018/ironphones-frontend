import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailsPageComponent } from './phone-details-page.component';

describe('PhoneDetailsPageComponent', () => {
  let component: PhoneDetailsPageComponent;
  let fixture: ComponentFixture<PhoneDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
