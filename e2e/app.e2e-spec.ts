import { InventoryManagementAppPage } from './app.po';

describe('inventory-management-app App', () => {
  let page: InventoryManagementAppPage;

  beforeEach(() => {
    page = new InventoryManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
