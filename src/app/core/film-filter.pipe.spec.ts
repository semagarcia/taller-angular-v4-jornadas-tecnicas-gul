import { FilmFilterPipe } from './film-filter.pipe';

describe('FilmFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilmFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should expand successfully the id of the serie', () => {
    const pipe = new FilmFilterPipe();
    expect(pipe.transform('BB')).toEqual('Breaking Bad');
    expect(pipe.transform('GoT')).toEqual('Games Of Thrones');
    expect(pipe.transform('TS')).toEqual('The Sopranos');
    expect(pipe.transform('TW')).toEqual('Teen Wolf');
    expect(pipe.transform('BoB')).toEqual('Band of Brothers');
    expect(pipe.transform('OITNB')).toEqual('Orange Is The New Black');
    expect(pipe.transform('VK')).toEqual('Vikings');
    expect(pipe.transform('XXX')).toEqual('Serie not recognized');
  });
});
