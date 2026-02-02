let timerId = null;
let remainingTime = 0;

self.onmessage = function(e) {
    if (e.data.action === 'start') {
        if (timerId) clearInterval(timerId);
        remainingTime = e.data.time;
        timerId = setInterval(() => {
            remainingTime--;
            self.postMessage({ action: 'tick', timeLeft: remainingTime });
            if (remainingTime <= 0) {
                clearInterval(timerId);
                self.postMessage({ action: 'expired' });
            }
        }, 1000);
    } else if (e.data.action === 'stop') {
        clearInterval(timerId);
        timerId = null;
    } else if (e.data.action === 'pause') {
        clearInterval(timerId);
        timerId = null;
    } else if (e.data.action === 'resume') {
        if (timerId) clearInterval(timerId);
        timerId = setInterval(() => {
            remainingTime--;
            self.postMessage({ action: 'tick', timeLeft: remainingTime });
            if (remainingTime <= 0) {
                clearInterval(timerId);
                self.postMessage({ action: 'expired' });
            }
        }, 1000);
    } else if (e.data.action === 'add') {
        remainingTime += e.data.time;
        self.postMessage({ action: 'tick', timeLeft: remainingTime });
    }
};