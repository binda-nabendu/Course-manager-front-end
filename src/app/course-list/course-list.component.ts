import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'; // Import your course service

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private courseService: CourseService) { } // Inject the course service

  ngOnInit(): void {
    this.fetchCourses(); // Fetch courses when component is initialized
  }

  fetchCourses() {
    this.loading = true;
    this.courseService.getCourses().subscribe(
      (data: any[]) => {
        this.courses = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error fetching courses. Please try again later.';
        this.loading = false;
      }
    );
  }
}
