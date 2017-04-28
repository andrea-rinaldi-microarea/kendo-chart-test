import { KendoChartTestPage } from './app.po';

describe('kendo-chart-test App', () => {
  let page: KendoChartTestPage;

  beforeEach(() => {
    page = new KendoChartTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
