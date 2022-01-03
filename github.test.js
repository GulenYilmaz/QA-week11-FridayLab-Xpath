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

// Download the lab materials from Frodo

// Run npm i in that directory

// Open the google.test.js file for a quick refresher (find the selector for line 10)

// Open the github.test.js file from that folder

// Open up GitHub so that you can use the inspector

// Find CSS or XPath selectors for the elements you’ll need to complete this flow: open the user dropdown menu from the top right, visit your profile, click to edit your profile, add something to your bio, and save the change

// In your test file, write a test that completes that flow

// Come up with another flow and write a test for that flow (Challenge: only use XPath selectors)

// Practice with XPath
// If you’d like to continue practicing with XPath, here’s a little game that is incredibly helpful!

// Save your work to GitHub.