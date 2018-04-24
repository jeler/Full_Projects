import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGameInfoComponent } from './popular-game-info.component';

describe('PopularGameInfoComponent', () => {
  let component: PopularGameInfoComponent;
  let fixture: ComponentFixture<PopularGameInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularGameInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
