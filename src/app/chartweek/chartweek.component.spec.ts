import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartweekComponent } from './chartweek.component';

describe('ChartweekComponent', () => {
  let component: ChartweekComponent;
  let fixture: ComponentFixture<ChartweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
