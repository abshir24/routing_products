import { PpmPage } from './app.po';

describe('ppm App', () => {
  let page: PpmPage;

  beforeEach(() => {
    page = new PpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
