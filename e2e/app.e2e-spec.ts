import { UpdatePage } from './app.po';

describe('update App', function() {
  let page: UpdatePage;

  beforeEach(() => {
    page = new UpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
