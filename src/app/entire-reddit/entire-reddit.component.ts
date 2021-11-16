import { Component, OnInit } from '@angular/core';
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
    this.RedditService.getReddit().subscribe((response: any) => {
      response.data.children.forEach((element: any) => {
        let newPost: AwwReddit = {
          title: element.data.title,
          img: element.data.thumbnail,
          url: 'https://reddit.com' + element.data.permalink,
          author: element.data.author,
        };
        this.RedditList.push(newPost);
      });
      console.log(this.RedditService);
    });
  }
}