const { By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.headless();

const TestCase_Login = async () => {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('http://16.171.41.53/');
    await driver.findElement(By.name('email')).sendKeys('minaellahi@yahoo.com');
    await driver.findElement(By.name('password')).sendKeys('mina');
    await driver.findElement(By.xpath('/html/body/div/div/2')).click();
    await driver.sleep(1000);
    let text = await driver.findElement(By.xpath('//*[@id="Dashboard"]/section/h2')).getText();

    if (text === 'Dashboard') {
      console.log('Test Case-1 (LOGIN) passed');
    } else {
      console.log('Test Case-1 (LOGIN) failed');
    }
  } catch (error) {
    console.log('Test Case-1 (LOGIN) failed.', error);
  } finally {
    await driver.quit();
  }
};

const TestCase_Register = async () => {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('http://16.171.41.53/');
    await driver.findElement(By.name('email')).sendKeys('minaellahi@yahoo.com');
    await driver.findElement(By.name('password')).sendKeys('mina');
    await driver.findElement(By.name('name')).sendKeys('Mina Ellahi');
    await driver.findElement(By.name('country')).sendKeys('Pakistan');
    await driver.findElement(By.name('address')).sendKeys('COMSATS University Islamabad');
    await driver.findElement(By.xpath('//*[@id="Register"]/section/div/div[2]/div[2]')).click();
    await driver.sleep(1000);
    let text = await driver.findElement(By.xpath('//*[@id="login"]/div/div[2]/h2')).getText();

    if (text === 'Successful') {
      console.log('Test Case-2 (REGISTER) passed');
    } else {
      console.log('Test Case-2 (REGISTER) failed');
    }
  } catch (error) {
    console.log('Test Case-2 (REGISTER) failed.', error);
  } finally {
    await driver.quit();
  }
};

const TestCase_DeleteProfile = async () => {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('http://16.171.41.53/');
    await driver.findElement(By.name('email')).sendKeys('minaellahi@yahoo.com');
    await driver.findElement(By.name('password')).sendKeys('mina');
    await driver.findElement(By.xpath('//*[@id="Dashboard"]/div/section/div[2]/button')).click();
    await driver.findElement(By.xpath('//*[@id="Profile"]/div/section/button')).click();
    await driver.sleep(1000);
    let text = await driver.findElement(By.xpath('//*[@id="Register"]/section/div[2]/h2')).getText();

    if (text === 'Register') {
      console.log('Test Case-3 (DELETEPROFILE) passed');
    } else {
      console.log('Test Case-3 (DELETEPROFILE) failed');
    }
  } catch (error) {
    console.log('Test Case-3 (DELETEPROFILE) failed.', error);
  } finally {
    await driver.quit();
  }
};

const TestCase_AddDetails = async () => {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('http://16.171.41.53/');
    await driver.findElement(By.name('email')).sendKeys('minaellahi@yahoo.com');
    await driver.findElement(By.name('password')).sendKeys('mina');
    await driver.findElement(By.xpath('//*[@id="Dashboard"]/section/div[2]/div/div/div[2]/div[3]/button')).click();
    await driver.findElement(By.name('budget')).sendKeys('100');
    await driver.findElement(By.name('title')).sendKeys('WebDeveloper');
    await driver.findElement(By.name('description')).sendKeys('Needs to complete tasks by the due date');
    await driver.findElement(By.xpath('//*[@id="Add"]/div/div/div[2]/button')).click();
    await driver.sleep(1000);
    let text = await driver.findElement(By.xpath('//*[@id="Adddetail"]/div/div[2]/h6')).getText();

    if (text === '100') {
      console.log('Test Case-4 (ADDDETAILS) passed');
    } else {
      console.log('Test Case-4 (ADDDETAILS) failed');
    }
  } catch (error) {
    console.log('Test Case-4 (ADDDETAILS) failed.', error);
  } finally {
    await driver.quit();
  }
};

const TestCase_DeleteDetails = async () => {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('http://16.171.41.53/');
    await driver.findElement(By.name('email')).sendKeys('minaellahi@yahoo.com');
    await driver.findElement(By.name('password')).sendKeys('mina');
    await driver.findElement(By.xpath('//*[@id="Dashboard"]/section/div[2]/div/div[2]/div[3]/button')).click();
    await driver.findElement(By.xpath('//*[@id="Details"]/div/div/div[2]/div/div')).click();
    await driver.sleep(1000);
    let text = await driver.findElement(By.xpath('//*[@id="Details"]/div/div[2]/div[2]/h6')).getText();

    if (text === '0') {
      console.log('Test Case-5 (DELETEDETAILS) passed');
    } else {
      console.log('Test Case-5 (DELETEDETAILS) failed');
    }
  } catch (error) {
    console.log('Test Case-5 (DELETEDETAILS) failed.', error);
  } finally {
    await driver.quit();
  }
};

module.exports = { TestCase_Login, TestCase_Register, TestCase_DeleteProfile, TestCase_AddDetails, TestCase_DeleteDetails };
