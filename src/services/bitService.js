import axios from "axios"
import { storageService } from './async-storage.service'
const db_key = 'db_key'
const db_key_history = 'db_key_history'

export const bitService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    try {
        let data = storageService.oldGet(db_key)
        if (!data) {
            const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
            data = res.data
            storageService.oldSave(db_key, data)
        }
        return data
    }
    catch (err) {
        console.log('error in bitcoin get')
        throw err
    }
}

async function getMarketPriceHistory() {
    try {
        let data = storageService.oldGet(db_key_history)
        if (!data) {
            let res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            data = res.data
            storageService.oldSave(db_key_history, data)
        }
        return data
    }
    catch (err) {
        console.log('error in bitcoin history get')
        throw err
    }
}

function getAvgBlockSize() {

}