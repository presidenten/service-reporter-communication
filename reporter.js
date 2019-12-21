import WdioReporter from '@wdio/reporter';

export default class CustomVideo extends WdioReporter {
  constructor (options) {
    super(options);
  }

  onAfterCommand () {
    if (browser.customConfig.saveScreenshot) {
      console.log('reporter processing')
      browser.customConfig.saveScreenshot = false;
    }
  }
}


