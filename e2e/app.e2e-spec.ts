import { WebappTempPage } from './app.po';

describe('webapp-temp App', () => {
  let page: WebappTempPage;

  beforeEach(() => {
    page = new WebappTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('f0 works!');
  });
});
