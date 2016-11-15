import { NgRaphaelPage } from './app.po';

describe('ng-raphael App', function() {
  let page: NgRaphaelPage;

  beforeEach(() => {
    page = new NgRaphaelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
