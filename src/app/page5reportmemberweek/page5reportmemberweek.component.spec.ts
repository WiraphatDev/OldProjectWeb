import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5reportmemberweekComponent } from './page5reportmemberweek.component';

describe('Page5reportmemberweekComponent', () => {
  let component: Page5reportmemberweekComponent;
  let fixture: ComponentFixture<Page5reportmemberweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5reportmemberweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5reportmemberweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
