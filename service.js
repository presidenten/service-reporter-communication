export default class CustomService {
  beforeSuite () {
    browser.customConfig = {}
  }

  afterCommand (commandName) {
    if (commandName === 'setValue') {
      console.log('service is taking screenshot (should process)')
      browser.customConfig.saveScreenshot = true;
      browser.takeScreenshot();
    }
  }
}
