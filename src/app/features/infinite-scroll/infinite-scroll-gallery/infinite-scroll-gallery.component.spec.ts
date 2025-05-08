import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollGalleryComponent } from './infinite-scroll-gallery.component';

describe('InfiniteScrollGalleryComponent', () => {
  let component: InfiniteScrollGalleryComponent;
  let fixture: ComponentFixture<InfiniteScrollGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteScrollGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
