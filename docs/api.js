module.exports = {
	"version": "2.0.0",
	"baseUrl": "/api",

	"routes":[
		// blocks
		{
			"category":"blocks",
			"url":"/block/$HASH",
			"desc":"Returns the details of the block with the given hash.",
			"testUrl":"/block/2bdfa1c40f92a111b4a0c17c607aba3772e58433fabbf1f3bd97226df303eb2d"
		},

		{
			"category":"blocks",
			"url":"/block/$HEIGHT",
			"desc":"Returns the details of the block at the given height.",
			"testUrl":"/block/123456"
		},

		{
			"category":"blocks",
			"url":"/block/header/$HASH",
			"desc":"Returns the details of the block header with the given hash.",
			"testUrl":"/block/header/2bdfa1c40f92a111b4a0c17c607aba3772e58433fabbf1f3bd97226df303eb2d"
		},

		{
			"category":"blocks",
			"url":"/block/header/$HEIGHT",
			"desc":"Returns the details of the block header at the given height.",
			"testUrl":"/block/header/123456"
		},

		{
			"category":"blocks",
			"url":"/blocks/tip",
			"desc":"Returns basic details about the chain tip."
		},




		// transactions
		{
			"category":"transactions",
			"url":"/tx/$TXID",
			"desc":"Returns the details of the transaction with the given txid.",
			"testUrl": "/tx/2bdfa1c40f92a111b4a0c17c607aba3772e58433fabbf1f3bd97226df303eb2d"
		},
		{
			"category":"transactions",
			"url":"/tx/volume/24h",
			"desc":"Returns total output of all transactions over the last 24hrs.",
			"testUrl": "/tx/volume/24h",
			"hideInSlowMode": true
		},




		// blockchain
		{
			"category":"blockchain",
			"url":"/blockchain/coins",
			"desc":"Returns the current supply of Groestlcoin. An estimate using a checkpoint can be returned in 2 cases: on 'slow' devices, and before the UTXO Set snapshot is loaded."
		},
		{
			"category":"blockchain",
			"url":"/blockchain/utxo-set",
			"desc":"Returns the latest UTXO Set snapshot. Warning: This call can be very slow, depending on node hardware and index configurations."
		},
		{
			"category":"blockchain",
			"url":"/blockchain/next-halving",
			"desc":"Returns details about the next, upcoming halving."
		},





		// addresses
		{
			"category":"addresses",
			"url":"/address/$ADDRESS",
			"desc":"Returns a summary of data pertaining to the given address. The output of this call will depend heavily on the configured 'Address API' (see .env-sample file). If an Address API is configured, transactions related to the given address will be returned (the below optional parameters apply to those transactions).",
			"optionalParams": {
				"limit":"Number of transactions to return",
				"offset":"Offset into transactions",
				"sort":"Sorting direction for transactions ('desc'=new first, 'asc'=old first)"
			},
			"testUrl":"/address/3FApY6qnt4AFE3Xx7BhVZ8wKidF4FSutGV"
		},





		// xyz-pubs
		{
			"category":"xpubs",
			"url":"/xyzpub/$XPUB",
			"desc":"Returns details for the specified extended public key, including related keys and addresses.",
			"optionalParams": {
				"limit":"The number of addresses to return",
				"offset":"Offset into the list of addresses"
			},
			"testUrl": "/util/xyzpub/xpub661MyMwAqRbcGbkAsfianKtzSn4BSvqxbmEpMbgbQfSL9orfgEQBSZ2wRR7wZSzXGeJL44PWLHPavGT6jDY219xpLFYUJA12Ziiz1Gk6nzA"
		},
		{
			"category":"xpubs",
			"url":"/xyzpub/addresses/$XPUB",
			"desc":"Returns a list of addresses derived from the given [xyz]pub.",
			"optionalParams": {
				"receiveOrChange":"0 for 'receive' addresses (default); 1 for 'change' addresses",
				"limit":"Number of addresses to return",
				"offset":"Offset into addresses"
			},
			"testUrl":"/xyzpub/addresses/xpub661MyMwAqRbcGbkAsfianKtzSn4BSvqxbmEpMbgbQfSL9orfgEQBSZ2wRR7wZSzXGeJL44PWLHPavGT6jDY219xpLFYUJA12Ziiz1Gk6nzA"
		},
		{
			"category":"xpubs",
			"url":"/xyzpub/txids/$XPUB",
			"desc":"Returns a list of transaction IDs associated with the given [xyz]pub.",
			"optionalParams": {
				"gapLimit":"Limit of empty addresses to end searching for transactions (default: 20)",
				"addressLimit":"Forced limit on the number of addresses to search through (both 'receive' and 'change' addresses up to this number will be searched)"
			},
			"testUrl":"/xyzpub/txids/xpub661MyMwAqRbcGbkAsfianKtzSn4BSvqxbmEpMbgbQfSL9orfgEQBSZ2wRR7wZSzXGeJL44PWLHPavGT6jDY219xpLFYUJA12Ziiz1Gk6nzA"
		},




		// mining
		{
			"category":"mining",
			"url":"/mining/hashrate",
			"desc":"Returns the network hash rate, estimated over the last 1, 7, 30, 90, and 365 days."
		},
		{
			"category":"mining",
			"url":"/mining/diff-adj-estimate",
			"desc":"Returns the current estimate for the next difficulty adjustment as a percentage."
		},
		{
			"category":"mining",
			"url":"/mining/next-block",
			"desc":"Returns a summary for the estimated next block to be mined (produced via getblocktemplate)."
		},
		{
			"category":"mining",
			"url":"/mining/next-block/txids",
			"desc":"Returns a list of the transaction IDs included in the estimated next block to be mined (produced via getblocktemplate)."
		},
		{
			"category":"mining",
			"url":"/mining/next-block/includes/$TXID",
			"desc":"Returns whether the specified transaction ID is included in the estimated next block to be mined (produced via getblocktemplate).",
			"testUrl":"/mining/next-block/includes/yourTxId"
		},
		{
			"category":"mining",
			"url":"/mining/miner-summary",
			"desc":"Returns whether the specified transaction ID is included in the estimated next block to be mined (produced via getblocktemplate).",
			"optionalParams": {
				"since":"Use the form 'Nd' to specify the number of day to look back (e.g. 'since=7d' will analyze the last 7 days)",
				"startHeight+endHeight":"Use these 2 parameters to specify a custom start/end height (e.g. 'startHeight=0&endHeight=24' to analyze the first 25 blocks)"
			},
			"testUrl":"/mining/miner-summary?since=1d"
		},





		// mempool
		{
			"category":"mempool",
			"url":"/mempool/count",
			"desc":"Returns the number of transactions in Groestlcoin Core's mempool."
		},
		{
			"category":"mempool",
			"url":"/mempool/summary",
			"desc":"Returns a summary of Groestlcoin Core's mempool (full output from 'getmempoolinfo')",
			"example": {"loaded":true,"size":225,"bytes":76209,"usage":410496,"total_fee":0.01763495,"maxmempool":15000000,"mempoolminfee":0.00001,"minrelaytxfee":0.00001,"unbroadcastcount":0}
		},
		{
			"category":"mempool",
			"url":"/mempool/fees",
			"desc":"Returns recommended fee rates in gros/vB for next block, 2 min, 3 min, and 4 min.",
			"example": {"nextBlock":20,"2min":20,"3min":20,"4min":20}
		},



		// price
		{
			"category":"price",
			"url":"/price",
			"desc":"Returns the price of 1 GRS, in USD, EUR, GBP, and XAU",
			"optionalParams": {
				"format":"Set to 'true' to include thousands-separator formatting in results"
			}
		},
		{
			"category":"price",
			"url":"/price/marketcap",
			"desc":"Returns the market cap of Groestlcoin, in USD, EUR, GBP, XAU",
		},
		{
			"category":"price",
			"url":"/price/sats",
			"desc":"Returns the price of 1 unit of [USD, EUR, GBP, XAU] (e.g. 1 \"usd\") in gros (aka \"Moscow Time\")",
		},




		// fun
		{
			"category":"fun",
			"url":"/quotes/all",
			"desc":"Returns the full curated list of Groestlcoin quotes.",
		},
		{
			"category":"fun",
			"url":"/quotes/$INDEX",
			"desc":"Returns the Groestlcoin quote with the given index from the curated list.",
			"testUrl": "/quotes/0"
		},
		{
			"category":"fun",
			"url":"/quotes/random",
			"desc":"Returns a random Groestlcoin quote from the curated list."
		},
		{
			"category":"fun",
			"url":"/holidays/all",
			"desc":"Returns the full curated list of Groestlcoin Holidays."
		},
		{
			"category":"fun",
			"url":"/holidays/today",
			"desc":"Returns the Groestlcoin Holidays celebrated 'today' (i.e. at the time the API call is made).",
			"optionalParams": {
				"tzOffset":"The number of hours to offset from UTC for the caller's local timezone, e.g. \"-5\" for EST"
			},
			"testUrl": "/holidays/today?tzOffset=-5"
		},
		{
			"category":"fun",
			"url":"/holidays/$DAY",
			"desc":"Returns the Groestlcoin Holidays celebrated on the specified day, using one of the following formats: yyyy-MM-DD, MM-DD.",
			"testUrl": "/holidays/01-03"
		},




		// admin
		{
			"category":"admin",
			"url":"/version",
			"desc":"Returns the semantic version of the public API, which is maintained separate from the app version."
		},

	]
}
