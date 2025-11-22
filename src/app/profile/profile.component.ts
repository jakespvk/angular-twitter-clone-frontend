import { Component, inject } from '@angular/core';

import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TweetComponent } from '../tweet/tweet.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardButtonComponent } from '@shared/components/button/button.component';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [RouterLink, TweetComponent, ZardIconComponent, ZardButtonComponent],
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
    this.tweetsService.getUserTweets(this.username).then((userTweetList: Tweet[]) => {
      this.userTweetList = userTweetList;
    });
  }
}
