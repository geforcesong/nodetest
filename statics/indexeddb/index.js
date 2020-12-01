class IndexDBHelper {
    constructor() {
        this.dbName = 'MyNewSite';
        this.storeName = 'SitesData';
        this.version = 12;
        this.database = null;
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new IndexDBHelper();
        }
        return this._instance;
    }

    async initDB() {
        const self = this;
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(self.dbName, self.version);
            request.onerror = function (event) {
                reject(event.target);
            };
            request.onsuccess = function (event) {
                self.database = event.target.result;
                resolve(self.database);
            };
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                try {
                    const s = request.transaction.objectStore(self.storeName);
                } catch {
                    db.createObjectStore(self.storeName, { keyPath: "key" });
                }
                db.onversionchange = function (event) {
                    db.close();
                    console.log("A new version of this page is ready. Please reload or close this tab!");
                };
            };
            request.onblocked = function (event) {
                console.log("Please close all other tabs with this site open!");
            };
        });
    }

    async get(key) {
        if (!this.database) {
            throw new Error('Database is not init successfully');
        }
        return new Promise((resolve, reject) => {
            const transaction = this.database.transaction([this.storeName], "readonly");
            const store = transaction.objectStore(this.storeName);
            const request = store.get(key);
            request.onsuccess = function (event) {
                return resolve(event.target.result);
            };
            request.onerror = function (event) {
                return reject(event.target)
            };
        })
    }

    async add(obj) {
        if (!this.database) {
            throw new Error('Database is not init successfully');
        }
        const existedObj = await this.get(obj.key);
        const existsFlag = !!existedObj;
        const transaction = this.database.transaction([this.storeName], "readwrite");
        var store = transaction.objectStore(this.storeName);
        if (existsFlag) {
            store.put(obj);
        } else {
            store.add(obj);
        }
        return transaction.complete;
    }

    async delete(key) {
        if (!this.database) {
            throw new Error('Database is not init successfully');
        }
        const tx = this.database.transaction([this.storeName], 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.delete(key);
        return tx.complete;
    }
}

const elKey = document.getElementById('iptkey');
const elVal = document.getElementById('iptval');
const btnSave = document.getElementById('btnSave');
const btnGet = document.getElementById('btnGet');
const btnDelete = document.getElementById('btnDelete');

btnDelete.addEventListener('click', async function (el) {
    const key = elKey.value;
    await IndexDBHelper.getInstance().delete(key);
    alert('DELETED');
})

btnGet.addEventListener('click', async function (el) {
    const key = elKey.value;
    const data = await IndexDBHelper.getInstance().get(key);
    if (data) {
        alert(JSON.stringify(data));
    } else {
        alert('NOT FOUND');
    }
})

btnSave.addEventListener('click', async function (el) {

    const key = elKey.value;
    const val = elVal.value;
    if (!key || !val) {
        return;
    }

    await IndexDBHelper.getInstance().add({
        key: key,
        value: val
    });
});

(async _ => {
    await IndexDBHelper.getInstance().initDB();

    await IndexDBHelper.getInstance().add({
        key: 'hotleadCount',
        value: 12301
    });
    await IndexDBHelper.getInstance().add({
        key: 'visitedCount',
        value: 9302
    });

    await IndexDBHelper.getInstance().add({
        key: 'visitedCount1',
        value: 9303
    });

    const data = await IndexDBHelper.getInstance().get('hotleadCount');
    console.log(data);
    const data1 = await IndexDBHelper.getInstance().get('visitedCount');
    console.log(data1);
    const data2 = await IndexDBHelper.getInstance().get('visitedCount1');
    console.log(data2);

})();
