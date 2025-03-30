import { Component, inject } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { NgFor } from '@angular/common';
import { TweetComponent } from '../tweet/tweet.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, TweetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tweetList: Tweet[] = [];
  tweetsService: TweetsService = inject(TweetsService);

  constructor() {
    this.tweetList = this.tweetsService.getAllTweets();
  }
}
