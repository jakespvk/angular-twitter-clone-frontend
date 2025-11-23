import { Component, HostListener, inject } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

import { TweetComponent } from '../tweet/tweet.component';
import { Router, RouterLink } from '@angular/router';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardTooltipModule } from '@shared/components/tooltip/tooltip';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [TweetComponent, RouterLink, ZardButtonComponent, ZardIconComponent, ZardTooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  tweetList: Tweet[] = [];
  tweetsService: TweetsService = inject(TweetsService);
  router = inject(Router);

  @HostListener('window:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent) {
    event.preventDefault();
    this.router.navigate(['/search']);
  }

  @HostListener('window:keydown.control.p', ['$event'])
  onCtrlP(event: KeyboardEvent) {
    event.preventDefault();
    this.router.navigate(['/post']);
  }

  constructor() {
    this.tweetsService.getAllTweets().then((tweetList: Tweet[]) => {
      this.tweetList = tweetList;
    });
  }
}
