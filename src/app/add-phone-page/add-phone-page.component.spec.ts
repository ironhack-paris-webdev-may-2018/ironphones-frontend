import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonePageComponent } from './add-phone-page.component';

describe('AddPhonePageComponent', () => {
  let component: AddPhonePageComponent;
  let fixture: ComponentFixture<AddPhonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
