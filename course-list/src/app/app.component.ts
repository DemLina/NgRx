import { Component, OnInit } from '@angular/core';
import { AppState } from './store/model/state.model';
import { Observable } from 'rxjs';
import { CourseItem } from './store/model/courseItem.model';
import { Store } from '@ngrx/store';
import { AddItemAction } from './store/actions/course.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courseItems$!: Observable<Array<CourseItem>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(new AddItemAction({ id: '3', department: 'lorem', name: 'loremvv' }));
    this.courseItems$ = this.store.select((store) => store.courses);
  }
}
