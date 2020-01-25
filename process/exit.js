let i = 1;
setInterval(() => {
    if( i === 5){
        console.log('종료!');
        process.exit();//반복 되는 코드를 종료
    }
    console.log(i);
    i++;
}, 1000);