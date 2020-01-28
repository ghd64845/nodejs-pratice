/*
cluster 모듈은 싱글 스레드인 노드가 CPU코어를 모두 사용할 수 있게 해주는 모듈이다.
포트를 공유하는 노드 프로세스를 여러 개 둘수도 있어 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼
요청이 분산, 즉 서버에 무리가 덜 간다.
하지만 세션 유지를 못한다.(이는 Redis등의 서버를 도입하여 해결 가능!)
 */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(numCPUs);
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    //CPU갯수 만큼 워커를 생산
    for(let i=0; i < numCPUs; i++){//cpu개수 만큼 워커 프로세스 생성
        cluster.fork();
    }
    //워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료 되었습니다.`);
        cluster.fork();
    });
} else {
    //워커들리 포트에 대기
    http.createServer((req, res) => {
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Server!</p>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);//새로고침할 때마다 프로세스 종료 
    },).listen(8085);

    console.log(`${process.pid}번 워커 실행`);
}