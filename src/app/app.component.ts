import {Component, OnInit} from '@angular/core'
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WordGame';

  ngOnInit() {
    this.loadWordsFromFile('assets/eo.txt')
  }

  loadWordsFromFile(fileName: string): void {
    const words = new Set()

    fetch(fileName)
      .then(response => response.text())
      .then(data => { //\–!-
        const dWords = data.replace(/[–!?«»(),.;:"'\d[a-zA-Z]/g, '').split('\n')
        dWords.forEach( line => {
          const word = line.replace('-', ' ').split(' ').filter(w => w.length>1)
          if (line.length>1) word.forEach(w => words.add(w.toLowerCase()))
        })
        const wordsArray = Array.from(words).sort()
        console.log('Слов: ' + wordsArray.length)
        const blob = new Blob([wordsArray.join('\r')], { type: 'text/plain;charset=utf-8' })
        saveAs(blob, 'onegin.txt')
      })
      .catch(err => alert(err.message))
  }
}
