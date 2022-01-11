import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3editmemberComponent } from './page3editmember.component';

describe('Page3editmemberComponent', () => {
  let component: Page3editmemberComponent;
  let fixture: ComponentFixture<Page3editmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3editmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3editmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
