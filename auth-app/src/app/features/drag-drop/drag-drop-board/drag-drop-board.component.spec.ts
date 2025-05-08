import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropBoardComponent } from './drag-drop-board.component';

describe('DragDropBoardComponent', () => {
  let component: DragDropBoardComponent;
  let fixture: ComponentFixture<DragDropBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
