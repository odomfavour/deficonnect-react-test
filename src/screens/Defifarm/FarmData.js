export const data = [
    {
        pool: 0,
        days: 90,
        label: '3M DFCBNB Farming',
        ticker: 'DFCBNB3M',
        symbol: 'DFC/BNB',
        apr: 30,
        infoLink: 'https://pancakeswap.finance/add/0x996c1bf72Ec220289ae0edd3a8d77080642121a2/BNB',
        type: 1,
        tokenAddress: '0xBbba7668E7E36752F3eDfc0fF794FdDA090B7560',
    },
    {
        pool: 1,
        days: 180,
        label: '6M DFCBNB Farming',
        ticker: 'DFCBNB6M',
        symbol: 'DFC/BNB',
        apr: 39,
        infoLink: 'https://pancakeswap.finance/add/0x996c1bf72Ec220289ae0edd3a8d77080642121a2/BNB',
        type: 1,
        tokenAddress: '0xBbba7668E7E36752F3eDfc0fF794FdDA090B7560',
    },
    {
        pool: 2,
        days: 170,
        label: '9M DFCBNB Farming',
        ticker: 'DFCBNB9M',
        symbol: 'DFC/BNB',
        apr: 51,
        infoLink: 'https://pancakeswap.finance/add/0x996c1bf72Ec220289ae0edd3a8d77080642121a2/BNB',
        type: 1,
        tokenAddress: '0xBbba7668E7E36752F3eDfc0fF794FdDA090B7560',
    },
    {
        pool: 3,
        days: 360,
        label: '12M DFCBNB Farming',
        ticker: 'DFCBNB12M',
        symbol: 'DFC/BNB',
        apr: 60,
        infoLink: 'https://pancakeswap.finance/add/0x996c1bf72Ec220289ae0edd3a8d77080642121a2/BNB',
        type: 1,
        tokenAddress: '0xBbba7668E7E36752F3eDfc0fF794FdDA090B7560',
    },

    {
        pool: 4,
        days: 90,
        label: '3M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC3M',
        apr: 10,
        infoLink: 'https://pancakeswap.info/pair/0xbbba7668e7e36752f3edfc0ff794fdda090b7560',
        type: 0,
        tokenAddress: '0x996c1bf72ec220289ae0edd3a8d77080642121a2',
    },
    {
        pool: 5,
        days: 180,
        label: '6M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC6M',
        apr: 39,
        infoLink: 'https://pancakeswap.finance/info/pair/0xbbba7668e7e36752f3edfc0ff794fdda090b7560',
        type: 0,
        tokenAddress: '0x996c1bf72ec220289ae0edd3a8d77080642121a2',
    },
    {
        pool: 6,
        days: 270,
        label: '9M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC9M',
        apr: 51,
        infoLink: 'https://pancakeswap.info/pair/0xbbba7668e7e36752f3edfc0ff794fdda090b7560',
        type: 0,
        tokenAddress: '0x996c1bf72ec220289ae0edd3a8d77080642121a2',
    },
    {
        pool: 7,
        days: 360,
        label: '12M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC12M',
        apr: 60,
        infoLink: 'https://pancakeswap.info/pair/0xbbba7668e7e36752f3edfc0ff794fdda090b7560',
        type: 0,
        tokenAddress: '0x996c1bf72ec220289ae0edd3a8d77080642121a2',
    },
]

export const getFarmData = (ticker) => {
    for(let i = 0; i < data.length; i++) {
        if (data[i].ticker === ticker) {
            return data[i]
        }
    }
    return null
}

export const getDetailLabel = (data) => {
    return data.type === 0 ? data.symbol + ' Tokens' : data.symbol + ' Pancakeswap LP'
}