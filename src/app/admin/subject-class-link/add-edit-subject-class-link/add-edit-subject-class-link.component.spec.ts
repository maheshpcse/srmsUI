import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubjectClassLinkComponent } from './add-edit-subject-class-link.component';

describe('AddEditSubjectClassLinkComponent', () => {
  let component: AddEditSubjectClassLinkComponent;
  let fixture: ComponentFixture<AddEditSubjectClassLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSubjectClassLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubjectClassLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
