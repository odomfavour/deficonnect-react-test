export const data = [
    {
        pool: 0,
        days: 90,
        label: '3M DFCBNB Farming',
        ticker: 'DFCBNB3M',
        symbol: 'DFC/BNB',
        apr: 30,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 1,
        tokenAddress: '0xF6527e0eb3d29fD1A86b6FC428759E16EAbd28ac',
    },
    {
        pool: 1,
        days: 180,
        label: '6M DFCBNB Farming',
        ticker: 'DFCBNB6M',
        symbol: 'DFC/BNB',
        apr: 39,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 1,
        tokenAddress: '0xF6527e0eb3d29fD1A86b6FC428759E16EAbd28ac',
    },
    {
        pool: 2,
        days: 170,
        label: '9M DFCBNB Farming',
        ticker: 'DFCBNB9M',
        symbol: 'DFC/BNB',
        apr: 51,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 1,
        tokenAddress: '0xF6527e0eb3d29fD1A86b6FC428759E16EAbd28ac',
    },
    {
        pool: 3,
        days: 360,
        label: '12M DFCBNB Farming',
        ticker: 'DFCBNB12M',
        symbol: 'DFC/BNB',
        apr: 60,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 1,
        tokenAddress: '0xF6527e0eb3d29fD1A86b6FC428759E16EAbd28ac',
    },

    {
        pool: 4,
        days: 90,
        label: '3M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC3M',
        apr: 10,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 0,
        tokenAddress: '0x651b6adf55249f285100dcf0fc29ee5b192583ac',
    },
    {
        pool: 5,
        days: 180,
        label: '6M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC6M',
        apr: 39,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 0,
        tokenAddress: '0x651b6adf55249f285100dcf0fc29ee5b192583ac',
    },
    {
        pool: 6,
        days: 270,
        label: '9M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC9M',
        apr: 51,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 0,
        tokenAddress: '0x651b6adf55249f285100dcf0fc29ee5b192583ac',
    },
    {
        pool: 7,
        days: 360,
        label: '12M DFC Staking',
        symbol: 'DFC',
        ticker: 'DFC12M',
        apr: 60,
        infoLink: 'https://pancakeswap.info/pair/0x45a9e8D48BC560416008D122C9437927fEd50E7d',
        type: 0,
        tokenAddress: '0x651b6adf55249f285100dcf0fc29ee5b192583ac',
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