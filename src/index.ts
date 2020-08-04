const wait = async (wait: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, wait)
    })
}

wait(3000).then(() => console.log("Hello World!"))