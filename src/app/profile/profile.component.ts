import { Component, inject } from '@angular/core';
import { TweetComponent } from '../tweet/tweet.component';
import { NgFor } from '@angular/common';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [NgFor, TweetComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userTweetList: Tweet[] = [];
  username: string = "";
  route: ActivatedRoute = inject(ActivatedRoute);
  tweetsService: TweetsService = inject(TweetsService);

  constructor() {
    this.username = this.route.snapshot.params["username"];
    this.userTweetList = this.tweetsService.getUserTweets(this.username);
  }
}
