
require('dotenv').config();

describe('Saucedemo test', async () => {
    //User Login
    it('succesful login', async() => {

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginButton = await browser.$('//input[@value="Login"]')
        const cartIcon =await browser.$('#shopping_cart_container')
        await browser.url('https://saucedemo.com/')
        
        //Login 
        await usernameTextbox.setValue('standard_user')
        await passwordTextbox.setValue(process.env.PASSWORD)
        await loginButton.click()

        //Validate user berada di dashboard setelah login
        await expect(cartIcon).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  

        await browser.pause(3000)
    });

    //Add item to cart
        
    it('succesful add item to cart', async () => {

        const addcartButton = await browser.$('//button[@id="add-to-cart-sauce-labs-backpack"]')
        const removecartButton = await browser.$('//button[@id="remove-sauce-labs-backpack"]')
        const cartBadge = await browser.$('(//span[@class="shopping_cart_badge"])[1]')

        await addcartButton.click()

        // Validate item sukses ditambahkan ke cart
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
        await expect(removecartButton).toBeDisplayed()
        await expect(cartBadge).toBeDisplayed()

        await browser.pause(3000)
    });
});
