import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliesAsksComponent } from './replies-asks.component';

describe('RepliesAsksComponent', () => {
  let component: RepliesAsksComponent;
  let fixture: ComponentFixture<RepliesAsksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepliesAsksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliesAsksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
