import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tweet',
  imports: [RouterLink],
  template: `
    <div class="post-card">
      <hr/>
      <a [routerLink]="['profile', tweet.username]">
        <h3>{{ tweet.username }}</h3>
      </a>
      <a [routerLink]="['/details', tweet.id]">
        <p>{{ tweet.message }}</p>
      </a>
    </div>
  `,
  styleUrl: './tweet.component.css'
})
export class TweetComponent {
  @Input() tweet!: Tweet;
}
