import { Component, OnInit } from '@angular/core';
import { TopicService } from './../topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-new',
  templateUrl: './topic-new.component.html',
  styleUrls: ['./topic-new.component.css']
})
export class TopicNewComponent implements OnInit {

  constructor(private _topicService:TopicService, private _router: Router) { }

  ngOnInit() {
    // this.getAllTopics();
  }
  addTopicInNewComponent(formData){
    this._topicService.addTopicInService(formData.value)
    .then((response)=> {
      console.log(response);
      this._router.navigate(['/topics/list'])
    })
    .catch((err)=> console.log(err) )
    formData.reset()

  }

}
