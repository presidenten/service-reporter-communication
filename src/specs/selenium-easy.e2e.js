import config from '@/config/e2e.js';
import selectors from '@/helpers/selectors.js';

describe('User interactions', () => {
  beforeEach(() => {
    browser.url(config.url);
  });

  it ('should be able to edit input (should pass)', () => {
    $(selectors.basicExamples).click();
    browser.pause(300); // avoid animation effect

    $(selectors.getExampleButtonByTarget('basic-first-form-demo')).click();

    $('#get-input input').setValue('Presidenten');
    $('#get-input button').click();
    $('#get-input button').click();

    console.log('test is taking screen shot (wont process)');
    browser.takeScreenshot();

    let name = $('#user-message #display').getText();

    expect(name).toBe('Presidenten');
  });

});

