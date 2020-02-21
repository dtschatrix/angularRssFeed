import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssExtraComponent } from './rss-extra.component';

describe('RssExtraComponent', () => {
  let component: RssExtraComponent;
  let fixture: ComponentFixture<RssExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
