import { Component, inject } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

import { TweetComponent } from '../tweet/tweet.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [TweetComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tweetList: Tweet[] = [];
  tweetsService: TweetsService = inject(TweetsService);

  constructor() {
    this.tweetsService.getAllTweets().then((tweetList: Tweet[]) => {
      this.tweetList = tweetList;
    });
  }
}
