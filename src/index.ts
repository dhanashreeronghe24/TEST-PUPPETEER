import Example from '../src/login-page';

export async function test(){
    let example = new Example();
    //await example.basic()
    await example.loginPage();
};

test();