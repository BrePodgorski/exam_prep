import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicShowComponent } from './topic-show.component';

describe('TopicShowComponent', () => {
  let component: TopicShowComponent;
  let fixture: ComponentFixture<TopicShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
