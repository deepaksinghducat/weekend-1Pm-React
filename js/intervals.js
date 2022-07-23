// setInterval
const interval = setInterval(() => {
    console.log("fasfdsafasdf");
},1000);

setTimeout(() => {
    console.log("clear Interval");
    clearInterval(interval);
},3000);