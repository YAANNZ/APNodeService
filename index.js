const express = require('express')
const path = require('path')
const formidable = require('formidable')
const util = require('util')
const fs = require("fs")
const extract = require('progress-extract')
const execFile = require('child_process').execFile;
const exec = require('child_process').exec;
const app = express()


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* home */
app.get('/', function (req, res) {
	res.render('home')
})

/* upload */
app.post('/upload', function (req, res) {
	var form = formidable.IncomingForm()
	form.uploadDir = './source/upload'
	form.keepExtensions = true
	form.parse(req, function(err, fields, files) {
		// res.writeHead(200, {'content-type': 'text/plain'})
		// res.write('received upload:\n\n')
		console.log(files.uploadFile.path)

		let target = process.cwd()
		extract(files.uploadFile.path, target + '/source/upload')
  		.then(() => {
    		console.log('extract succeed')
    		exec('python3 ./source/basesource/copyFile.py', function (err, stdout, srderr) {
				if(err) {
					console.log(srderr);
				} else {
					console.log(stdout);
					console.log('python3 success');
					execFile('./source/basesource/autoPackage.sh',{encoding:'utf8'},function (err,stdout,stderr){
						if (err){
							console.log(err);							
						} else {
							console.log(stdout)
							console.log('autoPackage.sh success')
						}
					});
				}
			});
  		}, err => {
    		console.log('extract failed')
  		})


		// res.end(util.inspect({fields: fields, files: files}))
		res.render('download')
	})
})

/* download */
app.get('/download', function (req, res) {
  	var filePath = './source/package/ipa/sgcis.ipa'
  	var stats = fs.statSync(filePath); 
  	if (stats.isFile()) {
    	res.set({
      		'Content-Type': 'application/octet-stream',
      		'Content-Disposition': 'attachment; filename=sgcis.ipa',
      		'Content-Length': stats.size
    	});
    	fs.createReadStream(filePath).pipe(res);
  	} else {
    	res.end(404);
  	}
})

app.listen(3000)






