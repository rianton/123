const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
   .::::                                 .::          .::      .::\n\
 .:    .::                               .::           .::   .::  \n\
.::           .::       .::       .::    .::   .::      .:: .::   \n\
.::         .::  .::  .::  .::  .::  .:: .:: .:   .::     .::     \n\
.::   .::::.::    .::.::    .::.::   .:: .::.::::: .::  .:: .::   \n\
 .::    .:  .::  .::  .::  .::  .::  .:: .::.:         .::   .::  \n\
  .:::::      .::       .::         .:: .:::  .::::   .::      .::\n\
                                 .::                              \n");
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: FORKED VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @Alfathdirk @TCR_TEAM and has been forked by @GoogleX !\n\
***Copyright belongs to the author***");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: 'EsOen7mhqsPmsnK1lIP6.KmPykel90yCItZ1HUpdRPG.Y6G6/m9uKyY+Ewf40DZu1haxrd0sDM3TsjOUNzvZAbU=',
	certificate: '886e7222c0a4a33ff97279f761d966366f05183c1d1b8a3dd6f9645b5a1cf9a3',
	email: '',
	password: ''
}

//let client =  new LineConnect();
let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
