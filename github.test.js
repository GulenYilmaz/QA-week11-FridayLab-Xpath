const { Builder, Capabilities, By } = require("selenium-webdriver") 

const chromedriver= require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("GitHub", async () => {
    await driver.get('https://github.com/GulenYilmaz')
    
    let userDropDown = await driver.findElement(By.xpath('//span[@class="dropdown-caret"][1]'))
     await userDropDown.click()
     await driver.sleep(5000)

    let yourProfileButton = await driver.findElement(By.xpath('//a[@data-hydro-click-hmac="4d3b2fd0c73331e12e74455e824d14256c7091a777605dbedd3d90a7c7384018"]'))
    await yourProfileButton.click()
    await driver.sleep(5000)

    let editProfileButton = await driver.findElement(By.xpath('//button[@class="btn btn-block js-profile-editable-edit-button"]'))
    await editProfileButton.click()
    await driver.sleep(5000)


    let editLocation =await driver.findElement(By.xpath('//input[@name="user[profile_location]"]'))
    await editLocation.sendKeys('Detroit-Royal-Oak\n')

    await driver.sleep(5000)
    
    await driver.quit()
})