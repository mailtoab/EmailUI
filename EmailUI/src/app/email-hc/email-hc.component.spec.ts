import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailHCComponent } from './email-hc.component';

describe('EmailHCComponent', () => {
  let component: EmailHCComponent;
  let fixture: ComponentFixture<EmailHCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailHCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
