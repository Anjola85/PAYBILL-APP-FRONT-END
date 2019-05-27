export class AppHelper {

    public static store(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static retrieve(key) {
        const storeVal = localStorage.getItem(key);
        return JSON.parse(storeVal);
    }

    public static remove(key) {
        return localStorage.removeItem(key);
    }

}
