import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2menuComponent } from './page2menu.component';

describe('Page2menuComponent', () => {
  let component: Page2menuComponent;
  let fixture: ComponentFixture<Page2menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2menuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
