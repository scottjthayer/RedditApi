import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {
  AwwReddit,
  Child,
  ChildData,
  Kind,
} from '../entire-reddit/entire-result';
import { RedditService } from '../reddit.service';
import { SingleResult } from '../single-result';

@Component({
  selector: 'app-single-reddit',
  templateUrl: './single-reddit.component.html',
  styleUrls: ['./single-reddit.component.css'],
})
export class SingleRedditComponent implements OnInit {

  @Input() PostInfo: AwwReddit = {
    title: "",
    img: "",
    url: "",
    author: ""
  }
  constructor() {}

  ngOnInit(): void {
  }
}
