import { CourseItem } from '../model/courseItem.model';
import { CourseAction, CourseActionType } from '../actions/course.action';

const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Sciences',
    name: 'C++',
  },
];

export function CourseReducer(state: Array<CourseItem> = initialState, action: CourseAction) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
