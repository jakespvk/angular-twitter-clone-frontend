import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tweetsService = inject(TweetsService);
  tweet: Tweet | undefined;

  constructor() {
    const tweetId = Number(this.route.snapshot.params["id"]);
    this.tweet = this.tweetsService.getTweetById(tweetId);
  }

}
