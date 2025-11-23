import { Component, HostListener, inject } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { TweetComponent } from '../tweet/tweet.component';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardInputDirective } from '@shared/components/input/input.directive';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [TweetComponent, ReactiveFormsModule, RouterLink, ZardButtonComponent, ZardIconComponent, ZardInputDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  tweetList: Tweet[] = [];
  tweetsService: TweetsService = inject(TweetsService);
  filteredTweetList: Tweet[] = [];
  router = inject(Router);

  @HostListener('document:keydown.control.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    event.preventDefault();
    this.router.navigate(['']);
  }

  searchTerm = new FormControl('');

  constructor() {
    this.getAllTweets();

    this.searchTerm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((searchTerm: string | null) => {
        if (searchTerm) {
          this.tweetsService.getFilteredTweets(searchTerm).then((filteredTweetList: Tweet[]) => {
            this.filteredTweetList = filteredTweetList;
          });
        } else {
          this.getAllTweets();
        }
      });
  }

  private getAllTweets() {
    this.tweetsService.getAllTweets().then((tweetList: Tweet[]) => {
      this.tweetList = tweetList;
      this.filteredTweetList = tweetList;
    });
  }
}
