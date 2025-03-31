import { Component, inject } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { NgFor } from '@angular/common';
import { TweetComponent } from '../tweet/tweet.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor, TweetComponent, RouterLink],
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
