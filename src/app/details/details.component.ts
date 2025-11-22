// TODO make details component modular and accept data either 'profile' tweets or 'tweet and replies'
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardButtonComponent } from '@shared/components/button/button.component';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [RouterLink, ZardIconComponent, ZardButtonComponent],
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
