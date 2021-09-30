'use strict';

console.log('start');
let data;

const sleep = (ms) => {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

const getData = (userId) => {
    sleep(2000);
    return `${userId}의 데이터`;
}

class Children {
    searchInfo(userId) {
        console.log('서치인포 실행', userId);
        let result;
        const promise = new Promise((resolve, reject) => {
            let info = getData(userId);
            if (info !== null) {
                console.log('데이터 전달받음');
                info += '입니다.';
                resolve(info);
            }
            console.log('출력값', result);
        });
        promise.finally((result) => console.log('finally', result));
        // promise.then((result) => {
        //     console.log(result);
        // });
    }
}

const goTo = (childId) => {
    const promise = new Promise((resolve, reject) => {
        const children = new Children();
        const result = children.searchInfo(childId);
        console.log('result: ', result);
        if (result != null) {
            resolve(result);
        }
    });
    promise.then((result) => {
        console.log('1.내부결과 출력', result);
    });
}

goTo('쇽쇽');