import { TallerAngular2JornadasTecnicasGulPage } from './app.po';

describe('taller-angular2-jornadas-tecnicas-gul App', () => {
  let page: TallerAngular2JornadasTecnicasGulPage;

  beforeEach(() => {
    page = new TallerAngular2JornadasTecnicasGulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
