export function fetchhWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}