const { 
    isMainThread,
    workerData, 
    Worker 
} = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread! Process ID: ${process.id}`);
    new Worker(__filename, {
        workerData: [1,3,4,6]
    });
    new Worker(__filename, {
        workerData: [4,3,7,6]
    });
} else {
    console.log(`Worker! Process ID: ${process.id}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}