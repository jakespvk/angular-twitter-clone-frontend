import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TweetsService } from '../tweets.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  tweetsService: TweetsService = inject(TweetsService);

  postTweetForm = new FormGroup({
    username: new FormControl(''),
    message: new FormControl(''),
  });

  postTweet() {
    this.tweetsService.postTweet(
      this.postTweetForm.value.username ?? '',
      this.postTweetForm.value.message ?? '',
    );
    this.postTweetForm.reset();
  }
}
