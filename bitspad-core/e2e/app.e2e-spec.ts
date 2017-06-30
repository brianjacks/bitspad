import { BitspadCorePage } from './app.po';

describe('bitspad-core App', () => {
  let page: BitspadCorePage;

  beforeEach(() => {
    page = new BitspadCorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
