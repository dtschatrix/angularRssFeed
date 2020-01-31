import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssThumbnailComponent } from './rss-thumbnail.component';

describe('RssThumbnailComponent', () => {
  let component: RssThumbnailComponent;
  let fixture: ComponentFixture<RssThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
