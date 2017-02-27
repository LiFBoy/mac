/**
 * Created by sheldon on 17/2/24.
 */
self.onmessage = function(event) {
    var data = event.data;
    var ans = fibonacci(data);
    this.postMessage(ans);
};

function fibonacci(n) {
    return n
}