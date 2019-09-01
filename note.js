const fs = require('fs');
const _ = require('lodash');
// const notes = require('note.json');
// console.log(note);
const action = process.argv[2];
let note = {
	title: '',
	body: ''
}
let obj = { table: [] }


switch (action) {
	case 'list': fs.readFile('note.json', 'utf8', function (err, data) {
		if (err) console.log(err)
		else console.log(data);
	})
		break;
	case 'add': process.argv[3] !== '--title' ? console.log('missing arguments --title') : note.title = process.argv[4]
		process.argv[5] !== '--body' ? console.log('missing arguments --body') : note.body = process.argv[6]

		fs.readFile('note.json', 'utf8', function (err, data) {
			if (err) console.log(err)
			else {
				obj = JSON.parse(data);
				obj.push(note);
				json = JSON.stringify(obj);
				fs.writeFile('note.json', json)
			}
		});
		break;
	case 'remove': process.argv[3] !== '--title' ? console.log('missing arguments --title')
		: fs.readFile('note.json', 'utf8', function (err, data) {
			if (err) console.log(err)
			else {
				obj = JSON.parse(data);
				// console.log(data);
				// console.log(process.argv[4]);
				let newObj = _.filter(obj, (o) => o.title !== process.argv[4]);
				json = JSON.stringify(newObj);
				fs.writeFile('note.json', json)


			}
		});
}