import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsksDetailsComponent } from './asks-details.component';

describe('AsksDetailsComponent', () => {
  let component: AsksDetailsComponent;
  let fixture: ComponentFixture<AsksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
