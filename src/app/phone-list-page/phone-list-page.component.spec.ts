import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListPageComponent } from './phone-list-page.component';

describe('PhoneListPageComponent', () => {
  let component: PhoneListPageComponent;
  let fixture: ComponentFixture<PhoneListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
