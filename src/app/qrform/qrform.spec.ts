import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrform } from './qrform';

describe('Qrform', () => {
  let component: Qrform;
  let fixture: ComponentFixture<Qrform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qrform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qrform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
