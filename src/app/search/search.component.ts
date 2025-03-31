import { Component, inject } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { TweetComponent } from '../tweet/tweet.component';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [TweetComponent, NgFor, ReactiveFormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  tweetList: Tweet[] = [];
  tweetsService: TweetsService = inject(TweetsService);
  filteredTweetList: Tweet[] = [];

  constructor() {
    this.tweetsService.getAllTweets().then((tweetList: Tweet[]) => {
      this.tweetList = tweetList;
      this.filteredTweetList = tweetList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredTweetList = this.tweetList;
      return;
    }

    // this.filteredTweetList = this.tweetList.filter((tweet) =>
    //   tweet?.message.toLowerCase().includes(text.toLowerCase()),
    // );
    this.tweetsService.getFilteredTweets(text).then((filteredTweetList: Tweet[]) => {
      this.filteredTweetList = filteredTweetList;
    });
  }
}
