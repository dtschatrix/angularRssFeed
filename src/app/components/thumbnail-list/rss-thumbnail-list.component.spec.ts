import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssThumbnailListComponent } from './rss-thumbnail-list.component';

describe('RssThumbnailComponent', () => {
  let component: RssThumbnailListComponent;
  let fixture: ComponentFixture<RssThumbnailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssThumbnailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssThumbnailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
