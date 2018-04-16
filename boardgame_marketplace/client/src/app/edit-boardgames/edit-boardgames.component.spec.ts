import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardgamesComponent } from './edit-boardgames.component';

describe('EditBoardgamesComponent', () => {
  let component: EditBoardgamesComponent;
  let fixture: ComponentFixture<EditBoardgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoardgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoardgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
