import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeshboardComponent } from './student-deshboard.component';

describe('StudentDeshboardComponent', () => {
  let component: StudentDeshboardComponent;
  let fixture: ComponentFixture<StudentDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDeshboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
