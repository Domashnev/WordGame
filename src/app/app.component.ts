import {Component, OnInit} from '@angular/core'
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WordGame';
  fileName = 'Евгений Онегин'
  words = new Set()
  badWords = [
    'гм', 'ль', 'же', 'ту', 'то', 'ан', 'ах',
    'бы', 'во', 'гг', 'за', 'на', 'нв', 'ну',
    'об', 'ой', 'от', 'ох', 'со', 'та', 'ту',
    'ух', 'фр', 'фу', 'ха', 'чу', 'шу', 'эй',
    'эк', 'эка', 'эх'
  ]

  ngOnInit() {
    this.loadWordsFromFile('assets/' + this.fileName + '.txt')
    // this.cutDictionary('Евгений Онегин слова', 8)
  }

  loadWordsFromFile(fileName: string): void {

    fetch(fileName)
      .then(response => response.text())
      .then(data => {
        const lineEnd = data.includes('\r\n') ? '\r\n' : (data.includes('\n') ? '\n' : '\r')
        const dWords = data.replace(/[–/\\’…„!?«»()\[\]<>,.;:"'\d[a-zA-Z]/g, '').split(lineEnd)
        dWords.forEach( line => {
          const word = line.replace('—', ' ').replace('-', ' ').split(' ').filter(w => w.length>1)
          if (line.length>1) word.forEach(w => !w.includes('-') && !this.badWords.includes(w.toLowerCase()) && this.words.add(w.toLowerCase()))
        })
        const wordsArray = Array.from(this.words).sort()
        const blob = new Blob([wordsArray.join(lineEnd)], { type: 'text/plain;charset=utf-8' })
        saveAs(blob, this.fileName + ' слова.txt')
      })
      .catch(err => alert(err.message))
  }

  cutDictionary(fileName: string, wordLength: number): void {
    fetch('assets/' + fileName + '.txt')
      .then(response => response.text())
      .then(data => {
        const lineEnd = data.includes('\r\n') ? '\r\n' : (data.includes('\n') ? '\n' : '\r')
        const words = data.split(lineEnd)
        const shortWords = words.filter(w => w.split(';')[0].length < wordLength)
        const longWords = words.filter(w => w.split(';')[0].length >= wordLength)

        console.log('Total = ' + words.length + '; Short+Long = ' + (shortWords.length +longWords.length))
        console.log('Short = ' + shortWords.length + '; Long = ' + longWords.length)

        const blob = new Blob([shortWords.join(lineEnd)], { type: 'text/plain;charset=utf-8' })
        saveAs(blob, fileName + ' (max length ' + (wordLength-1) + ').txt')

        const blob2 = new Blob([longWords.join(lineEnd)], { type: 'text/plain;charset=utf-8' })
        saveAs(blob2, fileName + ' (min length ' + wordLength + ').txt')

      })
  }
}
