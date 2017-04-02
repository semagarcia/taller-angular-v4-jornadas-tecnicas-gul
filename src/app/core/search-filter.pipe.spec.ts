import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
    let pipe: SearchFilterPipe;
    beforeEach(() => {
      pipe = new SearchFilterPipe();
    });

  it('create an instance', () => {
      expect(pipe).toBeTruthy();
  });

  it('should no filter (no input & no filter criteria)', () => {
      expect(pipe.transform([], '')).toEqual([]);
  });
});
