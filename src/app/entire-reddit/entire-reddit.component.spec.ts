import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireRedditComponent } from './entire-reddit.component';

describe('EntireRedditComponent', () => {
  let component: EntireRedditComponent;
  let fixture: ComponentFixture<EntireRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntireRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
