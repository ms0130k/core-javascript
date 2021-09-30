'use strict';

const sleep = ms => {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
};

const p0 = async () => {
    return $.ajax({
        url: '../textpage/text_0.html',
        type: 'get',
        dataType: 'html',
    });
}
const p1 = () => {
    sleep(1000);
    return new Promise(resolve => {
            $.ajax({
            url: '../textpage/text_1.html',
            type: 'get',
            dataType: 'html',
        }).done(resolve);
    });
}
const p2 = () => {
    sleep(1000);
    return $.ajax({
        url: '../textpage/text_2.html',
        type: 'get',
        dataType: 'html',
    });
};


async function test() {
    const p0Exc = p0();
    const p1Exc = p1();
    const p2Exc = p2();
    
    await p0Exc;
    await p1Exc;
    await p2Exc;
    return [p0Exc, p1Exc, p2Exc];
};
async function testSlow() {
    const p0Exc = await p0();
    const p1Exc = await p1();
    const p2Exc = await p2();
    return [p0Exc, p1Exc, p2Exc];
};

const startTieme = Date.now();
console.log(startTieme);
test().then((res) => {
    res.forEach(el => el.then(console.log));
    console.log('fast: ', Date.now() - startTieme);
});
testSlow().then((res) => {
    console.log('slow result: ', res);
    console.log('slow: ', Date.now() - startTieme);
});
$.when(p0(), p1(), p2()).done((v1, v2, v3) => {
    console.log('jqueyr: ', v1, v2, v3);
    console.log('jquery: ', Date.now() - startTieme);
});
