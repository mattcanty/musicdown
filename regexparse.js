const fs = require('fs')
const Regex = require('regex')

var musicdown = fs.readFileSync('musicdowns/brown-eyed-girl.musicdown').toString()

var propertyRegex = /(.+): (.+)/gi
var propertyMatch

while(propertyMatch = propertyRegex.exec(musicdown)) {
  console.log(propertyMatch);
}

var sectionsRegex = /-(.+)\n((?:\|.+\n?)+)/gi
var sectionMatch

while(sectionMatch = sectionsRegex.exec(musicdown)) {
  console.log(sectionMatch);
}
