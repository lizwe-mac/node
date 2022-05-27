class CoinFlip{
    getRandomNum(){
        return Math.round(Math.random())
    }
    getResult = (val) => val==1 ? "Heads" : "Tails"
}

function main(){
    let flipCoin = new CoinFlip

    let val = flipCoin.getRandomNum()
    let result = flipCoin.getResult(val)
    return result
}

main()


