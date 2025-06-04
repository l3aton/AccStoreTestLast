import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Смартфон'},
            {id: 2, name: 'Мобільні телефони'},
            {id: 3, name: 'Колонки'},
            {id: 4, name: 'Кавомашини'},
            {id: 5, name: 'Смарт годинники'},
        ]
        this._semiTypes = [
            {id: 1, name: 'sub cat 1', typeId: 1},
            {id: 2, name: 'sub cat 2', typeId: 2},
            {id: 3, name: 'sub cat 3', typeId: 3},
            {id: 4, name: 'sub cat 4', typeId: 4},
            {id: 5, name: 'sub cat 5', typeId: 5},
            {id: 6, name: 'sub cat 6', typeId: 6}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id:2, name: 'Apple'}
        ]
        this._devices = [
            {id:1, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:2, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:3, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:5, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:6, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:7, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:8, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:9, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:11, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:12, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:13, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:14, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:15, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:16, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:17, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:18, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:19, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:20, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:21, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:22, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'},
            {id:23, name: 'Iphone 12 pro', price: 10000, img: '/978c404f-1e75-43e2-9816-62d448718efe.jpg'}
        ]
        this._selectedType = {};
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type){
        this._selectedType = type;
    }

    get semiTypes() {
        return this._semiTypes;
      }
      
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
}