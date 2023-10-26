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

  ngOnInit() {
    this.loadWordsFromFile('assets/' + this.fileName + '.txt')
  }

  loadWordsFromFile(fileName: string): void {

    fetch(fileName)
      .then(response => response.text())
      .then(data => {
        const lineEnd = data.includes('\r\n') ? '\r\n' : (data.includes('\n') ? '\n' : '\r')
        const dWords = data.replace(/[–/\\’…„!?«»()\[\]<>,.;:"'\d[a-zA-Z]/g, '').split(lineEnd)
        dWords.forEach( line => {
          const word = line.replace('—', ' ').replace('-', ' ').split(' ').filter(w => w.length>1)
          if (line.length>1) word.forEach(w => !w.includes('-') && this.words.add(w.toLowerCase()))
        })
        const wordsArray = Array.from(this.words).sort()
        const blob = new Blob([wordsArray.join(lineEnd)], { type: 'text/plain;charset=utf-8' })
        saveAs(blob, this.fileName + ' слова.txt')
      })
      .catch(err => alert(err.message))
  }
}
