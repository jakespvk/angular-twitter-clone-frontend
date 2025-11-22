import { Component, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tweet',
  imports: [RouterLink],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css'
})
export class TweetComponent {
  @Input() tweet!: Tweet;
}
