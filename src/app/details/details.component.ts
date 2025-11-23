// TODO make details component modular and accept data either 'profile' tweets or 'tweet and replies'
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Reply } from '../reply';
import { ReplyComponent } from '../reply/reply.component';
import { ZardTooltipModule } from '@shared/components/tooltip/tooltip';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [RouterLink, ReactiveFormsModule, ZardIconComponent, ZardButtonComponent, ReplyComponent, ZardTooltipModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tweetsService = inject(TweetsService);
  tweet: Tweet | undefined;
  replies: Reply[] = [];

  replyContent = new FormControl('');

  constructor() {
    const tweetId = parseInt(this.route.snapshot.params['id'], 10);
    this.tweetsService.getTweetById(tweetId).then((tweet?: Tweet) => {
      this.tweet = tweet;
    });

    this.getReplies(tweetId);
  }

  sendReply() {
    if (!this.replyContent.value) {
      return;
    }
    const tweetId = parseInt(this.route.snapshot.params['id'], 10);
    this.tweetsService.postReply(tweetId, "TEMP_USERNAME", this.replyContent.value);
    this.getReplies(tweetId);
    this.replyContent.reset();
  }

  getReplies(tweetId: number): void {
    this.tweetsService.getRepliesByTweetId(tweetId).then((replies: Reply[]) => {
      this.replies = replies;
    });
  }
}
