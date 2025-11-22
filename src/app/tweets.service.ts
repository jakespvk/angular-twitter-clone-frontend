import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  async getAllTweets(): Promise<Tweet[]> {
    const data = await fetch(`${environment.apiUrl}/chats`);
    return (await data.json()) ?? [];
  }

  async getTweetById(id: number): Promise<Tweet | undefined> {
    const data = await fetch(`${environment.apiUrl}/chat/${id}`);
    return (await data.json()) ?? {};
  }

  async getUserTweets(username: string): Promise<Tweet[]> {
    const data = await fetch(`${environment.apiUrl}/chats/${username}`);
    return (await data.json()) ?? [];
  }

  async postTweet(username: string, message: string) {
    await fetch(`${environment.apiUrl}/chat`, {
      method: "POST",
      body: JSON.stringify({ "username": username, "message": message }),
    })
      .then(response => console.log(response.status));
  }

  async getFilteredTweets(keyword: string): Promise<Tweet[]> {
    const data = await fetch(`${environment.apiUrl}/chats/filter/${keyword}`);
    return (await data.json()) ?? [];
  }

  constructor() {
  }
}
