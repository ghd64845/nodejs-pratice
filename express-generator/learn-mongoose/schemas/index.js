const mongoose = require('mongoose');

module.exports = () => {
   const connect = () => {
       if(process.env.NODE_ENV !== 'production'){
           mongoose.set('debug', true);
       } // 개발환경이 아닐 때 몽구스가 생성하는 쿼리 내용을 통해 확인할 수 있는 부분
       mongoose.connect('mongodb://jaehong:dlwoghd@localhost:27017/admin', {dbName:'nodejs',
    }, (error) => {
        if(error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }//몽구스와 몽고디비를 연결하는 부분, 마지막 인자로 주어진 콜백 함수를 통해 연결 여부를 확인 
    });
   };
   connect();
   mongoose.connection.on('error', (error) => {
       console.log('몽고디비 연결 에러', error);
   });
   mongoose.connection.on('disconnected', () => {
       console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.');
       connect();
   });
   require('./user');
   require('./comment');
};
