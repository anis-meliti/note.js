const fs= require('fs');


switch (process.argv[2]){
	case 'list':  fs.readFile('note.json','utf8',function (error,data){
		if (error) console.log(error)
		console.log(data)
	});
	case 'add': console.log('missing requirement: title, body');
	case 'remove': console.log('missing requirement: title')
