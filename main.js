const fs = require('fs')
const mustache = require('mustache')
const musicdownParser = require('./parse.js')

fs.readdir('musicdowns', function(err, filenames) {
  var indexView = {
    list: []
  }

  filenames.filter(function(filename) {
    return filename.endsWith('musicdown')
  }).map(function(filename){
    var chordView = musicdownParser.parse(`musicdowns/${filename}`)

    var chordTemplate = fs.readFileSync('templates/chords.mustache').toString()

    var chordOutput = mustache.render(chordTemplate, chordView)

    var htmlFilename = filename.replace(/\musicdown$/g, 'html')

    fs.writeFileSync('output/' + htmlFilename, chordOutput)

    indexView.list.push({
      title: chordView.title,
      composer: chordView.composer,
      link: htmlFilename
    })
  })

  var indexTemplate = fs.readFileSync('templates/index.mustache').toString()

  var indexOutput = mustache.render(indexTemplate, indexView);

  fs.writeFileSync('output/index.html', indexOutput)
});
