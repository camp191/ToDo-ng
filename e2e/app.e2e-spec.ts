import { ToDoNgPage } from './app.po';

describe('to-do-ng App', () => {
  let page: ToDoNgPage;

  beforeEach(() => {
    page = new ToDoNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
