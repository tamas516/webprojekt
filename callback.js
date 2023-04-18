// const printNumber = (num) => {
//     setTimeout(() => {
//         console.log("Your number is: ", num);
//     }, Math.floor(Math.random() * 100) + 1);
// };

// const countToThree = () => {
//     printNumber(1);
//     printNumber(2);
//     printNumber(3);
// };

// countToThree();

// const printNumber = (num, callBackFn) => {
//     setTimeout(() => {
//         console.log("Your number is: ", num);
//         callBackFn();
//     }, Math.floor(Math.random() * 100) + 1);
// };

// const countToThree = () => {
//     printNumber(1, () => {
//         printNumber(2, () => {
//             printNumber(3, () => {});
//         });
//     });
// };
// countToThree();

const proxy = new Promise(
    (resolve, reject) => {}
);

proxy
    .then((param) => {
        console.log("done", param);
    })
    .catch((error) => {
        console.error("error", error);
    });

(async () => {
    try {
        const param = await proxy;
        console.log("done", param);
    } catch (error) {
        console.error("error", error);
    }
})();