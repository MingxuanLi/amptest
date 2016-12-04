import { AmpTestPage } from './app.po';

describe('amp-test App', function() {
  let page: AmpTestPage;

  beforeEach(() => {
    page = new AmpTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
