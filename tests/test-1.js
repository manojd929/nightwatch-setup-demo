module.exports = {
    'Demo test' : function (browser) {
      console.log(browser.launch_url);
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body')
        .assert.attributeContains('input[type="text"]', 'title', 'Search')
        .end();
    }
  };
