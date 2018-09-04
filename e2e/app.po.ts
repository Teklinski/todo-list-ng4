import { browser, element, by } from 'protractor';

export class TodoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-list-app h1')).getText();
  }
}
