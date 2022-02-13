import { Action } from '@ngrx/store';
import { CourseItem } from '../model/courseItem.model';

export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}

export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;

  constructor(public payload: CourseItem) {}
}

export type CourseAction = AddItemAction;
