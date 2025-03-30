import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  tweetList: Tweet[] = [
    {
      id: 1,
      username: "jake",
      message: "hi",
    },
    {
      id: 2,
      username: "kimmy",
      message: "hey",
    },
    {
      id: 3,
      username: "jakespvk",
      message: "hello",
    },
    {
      id: 4,
      username: "kimmyancheta",
      message: "hey there",
    },
    {
      id: 5,
      username: "sunsetkimcare",
      message: "heyyyy",
    },
  ];

  getAllTweets(): Tweet[] {
    return this.tweetList;
  }

  getTweetById(id: number): Tweet | undefined {
    return this.tweetList.find((tweet) => tweet.id === id);
  }

  getUserTweets(username: string): Tweet[] {
    let userTweets: Tweet[] = [];

    this.tweetList.forEach((tweet) => {
      if (tweet.username === username) {
        userTweets.push(tweet);
      }
    });

    return userTweets;
  }

  constructor() { }
}
