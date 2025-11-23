import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TweetsService } from '../tweets.service';
import { Router, RouterLink } from '@angular/router';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardInputDirective } from '@shared/components/input/input.directive';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardTooltipModule } from '@shared/components/tooltip/tooltip';

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [ReactiveFormsModule, RouterLink, ZardButtonComponent, ZardInputDirective, ZardIconComponent, ZardTooltipModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  tweetsService: TweetsService = inject(TweetsService);
  router = inject(Router);

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
    this.router.navigate(['']);
  }
}
