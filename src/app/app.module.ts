import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminSidemenuComponent } from './admin/admin-sidemenu/admin-sidemenu.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddEditClassComponent } from './admin/class/add-edit-class/add-edit-class.component';
import { ManageClassComponent } from './admin/class/manage-class/manage-class.component';
import { AddEditSubjectComponent } from './admin/subject/add-edit-subject/add-edit-subject.component';
import { ManageSubjectComponent } from './admin/subject/manage-subject/manage-subject.component';
import { AddEditSubjectClassLinkComponent } from './admin/subject-class-link/add-edit-subject-class-link/add-edit-subject-class-link.component';
import { ManageSubjectClassLinkComponent } from './admin/subject-class-link/manage-subject-class-link/manage-subject-class-link.component';
import { AddEditStudentComponent } from './admin/student/add-edit-student/add-edit-student.component';
import { ManageStudentComponent } from './admin/student/manage-student/manage-student.component';
import { AddEditStudentResultComponent } from './admin/student-result/add-edit-student-result/add-edit-student-result.component';
import { ManageStudentResultComponent } from './admin/student-result/manage-student-result/manage-student-result.component';
import { AddEditNoticeComponent } from './admin/notice/add-edit-notice/add-edit-notice.component';
import { ManageNoticeComponent } from './admin/notice/manage-notice/manage-notice.component';
import { UpdateProfileComponent } from './admin/profile/update-profile/update-profile.component';
import { ChangePasswordComponent } from './admin/profile/change-password/change-password.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { ViewProfileComponent } from './admin/profile/view-profile/view-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AdminSidemenuComponent,
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminHomeComponent,
        AddEditClassComponent,
        ManageClassComponent,
        AddEditSubjectComponent,
        ManageSubjectComponent,
        AddEditSubjectClassLinkComponent,
        ManageSubjectClassLinkComponent,
        AddEditStudentComponent,
        ManageStudentComponent,
        AddEditStudentResultComponent,
        ManageStudentResultComponent,
        AddEditNoticeComponent,
        ManageNoticeComponent,
        UpdateProfileComponent,
        ChangePasswordComponent,
        AdminSettingsComponent,
        ViewProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
