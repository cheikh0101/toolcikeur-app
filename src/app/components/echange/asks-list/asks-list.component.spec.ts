import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsksListComponent } from './asks-list.component';

describe('AsksListComponent', () => {
  let component: AsksListComponent;
  let fixture: ComponentFixture<AsksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
