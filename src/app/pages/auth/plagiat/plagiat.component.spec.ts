import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiatComponent } from './plagiat.component';

describe('PlagiatComponent', () => {
  let component: PlagiatComponent;
  let fixture: ComponentFixture<PlagiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlagiatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
