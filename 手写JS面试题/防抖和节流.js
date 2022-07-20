// 防抖:只执行最后一次（触发N秒后才执行，如果再次触发，则重新计时）
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
};

// 节流：控制执行次数（规定单位时间内，只有一次执行事件执行，如果触发多次，只有一次生效）
function throttle(fn, delay) {
    let flag = true;
    return function () {
        if (flag) {
            setTimeout(() => {
                fn();
            }, delay);
        }
        flag = false;
    };
};