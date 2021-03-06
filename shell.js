const { exec } = require('child_process')
const util = require('util');

function gitRemoteUpdate() {
    exec(`git remote update -p`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        gitFetch()
    })
}

function gitFetch() {
    exec(`git fetch`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        gitAdd()
    })
}

function gitAdd() {
    exec(`git add .`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        gitCommit()
    })
}

function gitCommit(msg) {
    exec(`git commit -m 'develop'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        gitPush()
    })
}

function gitPush(msg) {
    exec(`git push`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    })
}
gitRemoteUpdate()