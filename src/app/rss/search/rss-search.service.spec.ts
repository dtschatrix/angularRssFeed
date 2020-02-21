import { TestBed } from '@angular/core/testing';

import { RssSearchService } from './rss-search.service';

describe('RssSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssSearchService = TestBed.get(RssSearchService);
    expect(service).toBeTruthy();
  });
});
