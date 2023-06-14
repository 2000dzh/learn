var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MyPormise_instances, _MyPormise_result, _MyPormise_state, _MyPormise_handler, _MyPormise_observer, _MyPormise_changeState, _MyPormise_isPromiseLike, _MyPormise_runMicroTask, _MyPormise_run, _MyPormise_runOne;
// @ts-nocheck
var State;
(function (State) {
    State["Pending"] = "pending";
    State["Fulfilled"] = "fulfilled";
    State["Rejected"] = "rejected";
})(State || (State = {}));
var MyPormise = /** @class */ (function () {
    function MyPormise(executor) {
        var _this = this;
        _MyPormise_instances.add(this);
        _MyPormise_result.set(this, undefined);
        _MyPormise_state.set(this, State.Pending);
        _MyPormise_handler.set(this, []);
        _MyPormise_observer.set(this, null);
        var resolve = function (data) {
            __classPrivateFieldGet(_this, _MyPormise_instances, "m", _MyPormise_changeState).call(_this, State.Fulfilled, data);
        };
        var reject = function (reason) {
            __classPrivateFieldGet(_this, _MyPormise_instances, "m", _MyPormise_changeState).call(_this, State.Rejected, reason);
        };
        console.log('111');
        try {
            executor(resolve, reject);
        }
        catch (err) {
            reject(err);
        }
    }
    MyPormise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        console.log(__classPrivateFieldGet(this, _MyPormise_handler, "f"));
        return new MyPormise(function (resolve, reject) {
            __classPrivateFieldGet(_this, _MyPormise_handler, "f").push({
                onFulfilled: onFulfilled,
                onRejected: onRejected,
                resolve: resolve,
                reject: reject,
            });
            __classPrivateFieldGet(_this, _MyPormise_instances, "m", _MyPormise_run).call(_this);
        });
    };
    MyPormise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };
    MyPormise.prototype.finally = function (onFinally) {
        return this.then(function (data) {
            onFinally(data);
            return data;
        }, function (err) {
            onFinally(err);
            throw err;
        });
    };
    MyPormise.resolve = function (value) {
        if (value instanceof MyPormise) {
            return value;
        }
        var _resolve, _reject;
        var p = new MyPormise(function (resolve, reject) {
            _resolve = resolve;
            _reject = reject;
        });
        if (__classPrivateFieldGet(p, _MyPormise_instances, "m", _MyPormise_isPromiseLike).call(p, value)) {
            value.then(_resolve, _reject);
        }
        else {
            _resolve(value);
        }
        return p;
    };
    MyPormise.reject = function (reason) {
        return new MyPormise(function (resolve, reject) {
            reject(reason);
        });
    };
    return MyPormise;
}());
_MyPormise_result = new WeakMap(), _MyPormise_state = new WeakMap(), _MyPormise_handler = new WeakMap(), _MyPormise_observer = new WeakMap(), _MyPormise_instances = new WeakSet(), _MyPormise_changeState = function _MyPormise_changeState(state, result) {
    if (__classPrivateFieldGet(this, _MyPormise_state, "f") !== State.Pending) {
        return;
    }
    __classPrivateFieldSet(this, _MyPormise_state, state, "f");
    __classPrivateFieldSet(this, _MyPormise_result, result, "f");
    __classPrivateFieldGet(this, _MyPormise_instances, "m", _MyPormise_run).call(this);
}, _MyPormise_isPromiseLike = function _MyPormise_isPromiseLike(value) {
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
        return typeof value.then === 'function';
    }
    return false;
}, _MyPormise_runMicroTask = function _MyPormise_runMicroTask(func) {
    if (process !== undefined && typeof process.nextTick === 'function') {
        return process.nextTick(func);
    }
    else if (typeof MutationObserver === 'function') {
        if (__classPrivateFieldGet(this, _MyPormise_observer, "f") === null) {
            var counter = 1;
            __classPrivateFieldSet(this, _MyPormise_observer, new MutationObserver(function () {
                __classPrivateFieldGet(this, _MyPormise_observer, "f").disconnect();
                __classPrivateFieldSet(this, _MyPormise_observer, null, "f");
                func();
            }), "f");
            var textNode = document.createTextNode(String(counter));
            __classPrivateFieldGet(this, _MyPormise_observer, "f").observe(textNode, { characterData: true });
            counter += 1;
            textNode.data = String(counter);
        }
        else {
            __classPrivateFieldGet(this, _MyPormise_observer, "f").disconnect();
        }
        __classPrivateFieldGet(this, _MyPormise_observer, "f").observe(document.createTextNode(''), { characterData: true });
    }
    else {
        setTimeout(func, 0);
    }
}, _MyPormise_run = function _MyPormise_run() {
    if (__classPrivateFieldGet(this, _MyPormise_state, "f") === State.Pending) {
        return;
    }
    while (__classPrivateFieldGet(this, _MyPormise_handler, "f").length) {
        var _a = __classPrivateFieldGet(this, _MyPormise_handler, "f").shift(), onFulfilled = _a.onFulfilled, onRejected = _a.onRejected, resolve = _a.resolve, reject = _a.reject;
        if (__classPrivateFieldGet(this, _MyPormise_state, "f") === State.Fulfilled) {
            __classPrivateFieldGet(this, _MyPormise_instances, "m", _MyPormise_runOne).call(this, onFulfilled, resolve, reject);
        }
        else if (__classPrivateFieldGet(this, _MyPormise_state, "f") === State.Rejected) {
            __classPrivateFieldGet(this, _MyPormise_instances, "m", _MyPormise_runOne).call(this, onRejected, resolve, reject);
        }
    }
}, _MyPormise_runOne = function _MyPormise_runOne(callback, resolve, reject) {
    var _this = this;
    __classPrivateFieldGet(this, _MyPormise_instances, "m", _MyPormise_runMicroTask).call(this, function () {
        if (typeof callback !== 'function') {
            var settled = __classPrivateFieldGet(_this, _MyPormise_state, "f") === State.Fulfilled ? resolve : reject;
            settled(__classPrivateFieldGet(_this, _MyPormise_result, "f"));
            return;
        }
        try {
            var data = callback(__classPrivateFieldGet(_this, _MyPormise_result, "f"));
            var flag = __classPrivateFieldGet(_this, _MyPormise_instances, "m", _MyPormise_isPromiseLike).call(_this, data);
            if (flag) {
                data.then(resolve, reject);
            }
            else {
                resolve(data);
            }
        }
        catch (err) {
            reject(err);
        }
    });
};
var p = new MyPormise(function (resolve, reject) {
    setTimeout(function () {
        resolve('成功');
    }, 1000);
});
p.then(function (res) {
    console.log(res);
});
