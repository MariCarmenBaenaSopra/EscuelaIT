import { EscuelaitPage } from './app.po';

describe('escuelait App', () => {
  let page: EscuelaitPage;

  beforeEach(() => {
    page = new EscuelaitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
