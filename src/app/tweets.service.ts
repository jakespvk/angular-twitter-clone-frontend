import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  url = "http://localhost:8080";

  async getAllTweets(): Promise<Tweet[]> {
    const data = await fetch(`${this.url}/chats`);
    return (await data.json()) ?? [];
  }

  async getTweetById(id: number): Promise<Tweet | undefined> {
    const data = await fetch(`${this.url}/chat/${id}`);
    return (await data.json()) ?? {};
  }

  async getUserTweets(username: string): Promise<Tweet[]> {
    const data = await fetch(`${this.url}/chats/${username}`);
    return (await data.json()) ?? [];
  }

  async postTweet(username: string, message: string) {
    await fetch(`${this.url}/chat`, {
      method: "POST",
      body: JSON.stringify({ "username": username, "message": message }),
    })
      .then(response => console.log(response.status));
  }

  async getFilteredTweets(keyword: string): Promise<Tweet[]> {
    const data = await fetch(`${this.url}/chats/filter/${keyword}`);
    return (await data.json()) ?? [];
  }

  constructor() { }
}
