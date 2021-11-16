import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRedditComponent } from './single-reddit.component';

describe('SingleRedditComponent', () => {
  let component: SingleRedditComponent;
  let fixture: ComponentFixture<SingleRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
