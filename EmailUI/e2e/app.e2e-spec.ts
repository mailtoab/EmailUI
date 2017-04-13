import { EmailDashboardUIPage } from './app.po';

describe('email-dashboard-ui App', () => {
  let page: EmailDashboardUIPage;

  beforeEach(() => {
    page = new EmailDashboardUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
