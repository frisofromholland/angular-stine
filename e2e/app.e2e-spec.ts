import { StinePage } from './app.po';

describe('stine App', () => {
  let page: StinePage;

  beforeEach(() => {
    page = new StinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
