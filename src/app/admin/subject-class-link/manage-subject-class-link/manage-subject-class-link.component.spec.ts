import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectClassLinkComponent } from './manage-subject-class-link.component';

describe('ManageSubjectClassLinkComponent', () => {
  let component: ManageSubjectClassLinkComponent;
  let fixture: ComponentFixture<ManageSubjectClassLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubjectClassLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectClassLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
