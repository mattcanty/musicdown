const fs = require('fs')

function parseProperty(musicdownStringArray, property) {
  return musicdownStringArray.filter(function (line) {
    return line.startsWith(property)
  })[0].split(':', 3)[1].trim()
}

function parseSection(musicdownStringArray, sectionName) {
  var isSection = false

  var sectionLines = musicdownStringArray.filter(function (line) {
    if(isSection && line.startsWith('-')) {
      isSection = false
    }

    if(line.startsWith(`-${sectionName}`)) {
      isSection = true
    }

    return isSection && line
  }).splice(1).map(function (line) {
    return line.split('|').filter(function (chord){
      return chord
    })
  })

  return {
    name: sectionName,
    lines: sectionLines
  }
}

function parseSections(musicdownStringArray) {
  return musicdownStringArray.filter(function (line) {
    return line.startsWith('-')
  }).map(function (section) {
    return parseSection(musicdownStringArray, section.substring(1))
  })
}

module.exports.parse = function (file) {
  var musicdown = fs.readFileSync(file).toString().split('\n')

  return {
    title: parseProperty(musicdown, 'title'),
    composer: parseProperty(musicdown, 'composer'),
    sections: parseSections(musicdown)
  }
}
