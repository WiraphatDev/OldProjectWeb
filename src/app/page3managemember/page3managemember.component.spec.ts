import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3managememberComponent } from './page3managemember.component';

describe('Page3managememberComponent', () => {
  let component: Page3managememberComponent;
  let fixture: ComponentFixture<Page3managememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3managememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3managememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
