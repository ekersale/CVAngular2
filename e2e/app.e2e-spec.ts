import { ElliotCvPage } from './app.po';

describe('elliot-cv App', function() {
  let page: ElliotCvPage;

  beforeEach(() => {
    page = new ElliotCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
