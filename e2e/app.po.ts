import { browser, element, by } from 'protractor';

export class WebappTempPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('f0-root h1')).getText();
  }
}
