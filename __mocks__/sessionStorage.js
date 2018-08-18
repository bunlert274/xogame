class SessionStorage {
    constructor(storage = {}) {
        this.storage = storage;
    }

    getItem(key) {
        return this.storage[key] || null;
    }

    setItem(key, value) {
        this.storage[key] = value;
    }

    clear() {
        this.storage = {};
    }
}

export default new SessionStorage();