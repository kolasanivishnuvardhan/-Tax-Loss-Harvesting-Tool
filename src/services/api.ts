import { Holding } from '../types/holdings';
import { CapitalGainsApiResponse } from '../types/capital-gains';

// Dummy Holdings Data
const holdings: Holding[] = [
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "currentPrice": 85320.15,
    "totalHolding": 0.63776,
    "averageBuyPrice": 85320.15,
    "stcg": {
      "balance": "0.338 BTC",
      "gain": -1200
    },
    "ltcg": {
      "balance": "3.300 BTC",
      "gain": 2400
    }
  },
  {
    "coin": "ETH",
    "coinName": "Ethereum",
    "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "currentPrice": 1620.15,
    "totalHolding": 5.6736,
    "averageBuyPrice": 1620.15,
    "stcg": {
      "balance": "2.332 ETH",
      "gain": 55320.15
    },
    "ltcg": {
      "balance": "3.245 ETH",
      "gain": 8239.29
    }
  },
  {
    "coin": "USDT",
    "coinName": "Tether",
    "logo": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    "currentPrice": 1.15,
    "totalHolding": 3096.54,
    "averageBuyPrice": 1.15,
    "stcg": {
      "balance": "2011.23 USDT",
      "gain": -1200
    },
    "ltcg": {
      "balance": "902.47 USDT",
      "gain": 2400
    }
  },
  {
    "coin": "MATIC",
    "coinName": "Polygon",
    "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    "currentPrice": 2.31,
    "totalHolding": 2210,
    "averageBuyPrice": 2.31,
    "stcg": {
      "balance": "802 MATIC",
      "gain": -1200
    },
    "ltcg": {
      "balance": "402 MATIC",
      "gain": 2400
    }
  },
  {
    "coin": "USDC",
    "coinName": "USDC",
    "logo": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    "currentPrice": 85.41,
    "totalHolding": 0.0015339999999994802,
    "averageBuyPrice": 1.5863185433764244,
    "stcg": {
      "balance": 0.0015339999999994802,
      "gain": 0.12858552735441697
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WETH",
    "coinName": "Polygon PoS Bridged WETH (Polygon POS)",
    "logo": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
    "currentPrice": 211756,
    "totalHolding": 0.00023999998390319965,
    "averageBuyPrice": 3599.856066001555,
    "stcg": {
      "balance": 0.00023999998390319965,
      "gain": 49.957471193511736
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SOL",
    "coinName": "SOL (Wormhole)",
    "logo": "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
    "currentPrice": 14758.01,
    "totalHolding": 3.469446951953614e-17,
    "averageBuyPrice": 221.42847548590152,
    "stcg": {
      "balance": 3.469446951953614e-17,
      "gain": 5.043389846205066e-13
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WPOL",
    "coinName": "Wrapped POL",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 22.08,
    "totalHolding": 2.3172764293128694,
    "averageBuyPrice": 0.5227311370876341,
    "stcg": {
      "balance": 1.3172764293128694,
      "gain": 49.954151016387065
    },
    "ltcg": {
      "balance": 1,
      "gain": 20
    }
  },
  {
    "coin": "GONE",
    "coinName": "Gone",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 0.0001462,
    "totalHolding": 696324.3075326696,
    "averageBuyPrice": 0.00001637624055112482,
    "stcg": {
      "balance": 696324.3075326696,
      "gain": 90.39943939952589
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "$CULO",
    "coinName": "CULO",
    "logo": "https://coin-images.coingecko.com/coins/images/34662/large/CULO-logo-inverted_200.png?1705641744",
    "currentPrice": 0.00001623,
    "totalHolding": 150000,
    "averageBuyPrice": 0,
    "stcg": {
      "balance": 150000,
      "gain": 2.4345
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FLAME",
    "coinName": "FireStarter",
    "logo": "https://coin-images.coingecko.com/coins/images/17359/large/WhiteOnBlack_Primary_Logo.png?1696516910",
    "currentPrice": 0.355985,
    "totalHolding": 1.4210854715202004e-14,
    "averageBuyPrice": 0.07889041030290807,
    "stcg": {
      "balance": 1.4210854715202004e-14,
      "gain": 3.9377509565538836e-15
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "PIG",
    "coinName": "Pigcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/35425/large/pigcoin_200.png?1708544734",
    "currentPrice": 0.00008706,
    "totalHolding": 1.79,
    "averageBuyPrice": 0,
    "stcg": {
      "balance": 1.79,
      "gain": 0.0001558374
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SLN",
    "coinName": "Smart Layer Network",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 6.66,
    "totalHolding": 0.01,
    "averageBuyPrice": 4.999247835735738,
    "stcg": {
      "balance": 0.01,
      "gain": 0.016607521642642627
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "OX",
    "coinName": "OX Coin",
    "logo": "https://coin-images.coingecko.com/coins/images/35365/large/logo.png?1708395976",
    "currentPrice": 0.13319,
    "totalHolding": 5,
    "averageBuyPrice": 0.018408606024462898,
    "stcg": {
      "balance": 5,
      "gain": 0.5739069698776855
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "QUICK",
    "coinName": "Quickswap [OLD]",
    "logo": "https://coin-images.coingecko.com/coins/images/13970/large/quick.png?1696513704",
    "currentPrice": 2319.83,
    "totalHolding": 5.961538207532868e-11,
    "averageBuyPrice": 65.86759737193783,
    "stcg": {
      "balance": 5.961538207532868e-11,
      "gain": 1.3437082981609774e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "DFYN",
    "coinName": "Dfyn Network",
    "logo": "https://coin-images.coingecko.com/coins/images/15368/large/SgqhfWz4_400x400_%281%29.jpg?1696515016",
    "currentPrice": 0.300613,
    "totalHolding": 3.1178615245153196e-11,
    "averageBuyPrice": 0.03486178524947315,
    "stcg": {
      "balance": 3.1178615245153196e-11,
      "gain": 8.285754875638759e-12
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "LINK",
    "coinName": "Chainlink",
    "logo": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    "currentPrice": 1450.14,
    "totalHolding": 0.000047233224826389,
    "averageBuyPrice": 9.172984515948809,
    "stcg": {
      "balance": 0.000047233224826389,
      "gain": 0.06806151900976895
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "BLOK",
    "coinName": "Bloktopia",
    "logo": "https://coin-images.coingecko.com/coins/images/18819/large/logo-bholdus-6.png?1696518281",
    "currentPrice": 0.02974533,
    "totalHolding": 9.822542779147625e-11,
    "averageBuyPrice": 0.005182145656093,
    "stcg": {
      "balance": 9.822542779147625e-11,
      "gain": 2.412729290101157e-12
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SPHERE",
    "coinName": "Sphere Finance",
    "logo": "https://coin-images.coingecko.com/coins/images/24424/large/2iR2JsL.png?1696523606",
    "currentPrice": 0.00729945,
    "totalHolding": 2.2737367544323206e-13,
    "averageBuyPrice": 0.011065778585432803,
    "stcg": {
      "balance": 2.2737367544323206e-13,
      "gain": -8.563639733967655e-16
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "TRADE",
    "coinName": "Polytrade",
    "logo": "https://coin-images.coingecko.com/coins/images/16416/large/Logo_colored_200.png?1696516012",
    "currentPrice": 17.51,
    "totalHolding": 3.325212327709437e-11,
    "averageBuyPrice": 0.25960465528043797,
    "stcg": {
      "balance": 3.325212327709437e-11,
      "gain": 5.736122725812298e-10
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WELT",
    "coinName": "Fabwelt",
    "logo": "https://coin-images.coingecko.com/coins/images/20505/large/welt.PNG?1696519911",
    "currentPrice": 0.060863,
    "totalHolding": 1.063542780948968,
    "averageBuyPrice": 0.01520546569793174,
    "stcg": {
      "balance": 1.063542780948968,
      "gain": 0.048558741002894576
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FTM",
    "coinName": "Fantom",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 52.99,
    "totalHolding": 0.04265758808550148,
    "averageBuyPrice": 1.7040326829291739,
    "stcg": {
      "balance": 0.04265758808550148,
      "gain": 2.1877356683780986
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "EZ",
    "coinName": "EasyFi V2",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 0.885074,
    "totalHolding": 0.0005424384664524931,
    "averageBuyPrice": 6.539367177529248,
    "stcg": {
      "balance": 0.0005424384664524931,
      "gain": -0.0030671061200917595
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "FRM",
    "coinName": "Ferrum Network",
    "logo": "https://coin-images.coingecko.com/coins/images/8251/large/FRM.png?1696508455",
    "currentPrice": 0.093794,
    "totalHolding": 6.442993445432421e-7,
    "averageBuyPrice": 0.453964789704584,
    "stcg": {
      "balance": 6.442993445432421e-7,
      "gain": -2.3205780373028534e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "TITAN",
    "coinName": "IRON Titanium",
    "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    "currentPrice": 8.65643e-7,
    "totalHolding": 8.861,
    "averageBuyPrice": 8.531798889329416e-7,
    "stcg": {
      "balance": 8.861,
      "gain": 1.1043562716520403e-7
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  }
];

// Dummy Capital Gains Data
const capitalGains: CapitalGainsApiResponse = {
  capitalGains: {
    stcg: {
      profits: 70200.88,
      losses: 1548.53
    },
    ltcg: {
      profits: 5020,
      losses: 3050
    }
  }
};

export function fetchHoldings(): Promise<Holding[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(holdings), 500);
  });
}

export function fetchCapitalGains(): Promise<CapitalGainsApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(capitalGains), 500);
  });
} 