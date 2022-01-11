import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6reportmembermonthComponent } from './page6reportmembermonth.component';

describe('Page6reportmembermonthComponent', () => {
  let component: Page6reportmembermonthComponent;
  let fixture: ComponentFixture<Page6reportmembermonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page6reportmembermonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page6reportmembermonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
