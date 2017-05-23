import { Ng2JsgridPage } from './app.po';

describe('ng2-jsgrid App', () => {
  let page: Ng2JsgridPage;

  beforeEach(() => {
    page = new Ng2JsgridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
