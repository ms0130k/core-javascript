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
        return new Promise((resovle, reject) => {
            let info = getData(userId);
            if (info != null) {
                console.log('데이터 전달받음');
                info += '입니다';
                resovle(info);
            }
        });
    }
}

const goTo = (childId) => {
    const children = new Children();
    const data = children.searchInfo(childId);
    data.then(console.log);
}

goTo('쇽쇽');