import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tweetsService = inject(TweetsService);
  tweet: Tweet | undefined;

  constructor() {
    const tweetId = parseInt(this.route.snapshot.params['id'], 10);
    this.tweetsService.getTweetById(tweetId).then((tweet?: Tweet) => {
      this.tweet = tweet;
    });
  }

}
