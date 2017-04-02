import { FilmFilterPipe } from './film-filter.pipe';

describe('FilmFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilmFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
