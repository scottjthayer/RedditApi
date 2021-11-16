import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedditService } from '../reddit.service';
import { AwwReddit, ChildData } from './entire-result';

@Component({
  selector: 'app-entire-reddit',
  templateUrl: './entire-reddit.component.html',
  styleUrls: ['./entire-reddit.component.css'],
})
export class EntireRedditComponent implements OnInit {
  RedditList: AwwReddit[] = [];
  ChildData: ChildData[] = [];

  constructor(private RedditService: RedditService) {}

  ngOnInit(): void {
    this.getRedditInfo('aww');
  }

  SearchReddit(form: NgForm) {
    let searchResult: string = form.form.value.SubReddit;
    this.getRedditInfo(searchResult);
  }

  // entire method is to take input of subreddit then return data for that sub.
  getRedditInfo(subreddit: string): void {
    this.RedditList = [];
    this.RedditService.getReddit(subreddit).subscribe((response: any) => {
      response.data.children.forEach((element: any) => {
        let newPost: AwwReddit = {
          title: element.data.title,
          img: element.data.thumbnail,
          url: 'https://reddit.com' + element.data.permalink,
          author: element.data.author,
        };
        this.RedditList.push(newPost);
      });
      this.RedditList.splice(10);
      console.log(this.RedditList);
    });
  }
}
