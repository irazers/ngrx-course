import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { CourseActions } from '../action-types';
import { compareCourses, Course } from '../model/course';

// tslint:disable-next-line:no-empty-interface
export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses
});

export const initialCourseState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(
    action.courses,
    {...state, allCoursesLoaded: true}
  ))
);

export const {selectAll} = adapter.getSelectors();
