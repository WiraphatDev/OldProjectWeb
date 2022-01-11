import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4systemrankComponent } from './page4systemrank.component';

describe('Page4systemrankComponent', () => {
  let component: Page4systemrankComponent;
  let fixture: ComponentFixture<Page4systemrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page4systemrankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4systemrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
