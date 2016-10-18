var fs = require('fs');

var jobs = [];
fs.readFile('./jobtitles.txt', 'utf8', function(err, data) {
  if (err) console.log(err);
  var lines = data.split('\n')
  lines.forEach(line => {
    if (line.match(/\.\s*(.*)\s\–/) !== null) {
      var extract = line.match(/\.\s*(.*)\s\–/).pop();
      console.log(extract)
      jobs.push(extract);
    }
  })

  jobs.forEach(job => {
    fs.appendFile('./newjobs.txt', job+'\n', function(err) {
      if (err) throw err;
      console.log('complete')
    })
  })
})

