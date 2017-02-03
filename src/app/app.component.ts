import { Component, Input } from '@angular/core';

/* ----- Sidebar Component -----*/
@Component({
  selector: 'app-sidebar',
  template: `  
  <div id="sidebar">
    Sidebar will go here
  </div>
`
})
export class SidebarComponent {}

/*----- ArticleComponent -------*/
@Component({
  selector: 'app-article',
  template: `
    <div class="image">
    <img src="https://placekitten.com/g/400/300"/>
    <div class="content">
      <div class="header">
        {{ article.title }}
      </div>
      <div class="meta">
        Voting and votes will go here
      </div>
      <div class="meta date">
        Today
      </div>
      <div class="meta description">
        <p>{{ article.description }}</p>
      </div>
      <div class="extra">
        <a
          href="#"
          target="_blank"
          class="ui right floated button primary">
            Read more
          <i class="right chevron icon"></i>
        </a>
      </div>
    </div>
  </div>
`
})
export class ArticleComponent {
  @Input() article: Object;
}

/*-------------- AppComponent -------------*/
@Component({
  selector: 'app-root',
  template: `
    <div class="ui container">
      <app-sidebar></app-sidebar>
      <div class="ui divided items">
        <app-article
          *ngFor="let article of articles"
          [article]="article"
          class="item">
        </app-article>    
      </div>
    </div>
  `,
})
export class AppComponent {
  articles: Article[];
  constructor(){
    this.articles = [
      new Article (
        'The Angular 2 screencast',
        'The easiest way to learn Angular 2 is with' +
        ' Fullstack.io!'
      ),
      new Article(
        'Fullstack React',
        'Want to learn React as well?'
      ),
      new Article(
        'Vue is new',
        'And pretty cool syntax too'
      ),
      new Article(
        'And what about elm',
        'Everyone likes elm...right?'
      )
    ];
  }
}

/*---------------- Article Class -------------------*/
class Article {
  constructor(
    public title: string,
    public description: string){}

 date(): Date {
    return new Date();
 }

}
