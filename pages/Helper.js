class Helper {

    constructor(page) {
        this.page = page;
    }

    async HomePage() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');

       
    }

    async login(name, password) {
       
        await this.page.locator("input[placeholder='Enter Name']").fill(name);
        await this.page.locator("input[placeholder='Enter EMail']").fill(password);
       
    }


}

module.exports = { Helper };