import { Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/auth.service';
import { SleepService } from '../services/sleep.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileselectorComponent } from '../profileselector/profileselector.component';
import { EmailselectorComponent } from '../emailselector/emailselector.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  loadedUserEmail: string = '';
  userEmail: string = this.loadedUserEmail;
  editedEmail: string = '';
  loadedUserPfp: string = '';
  userPfp: string = this.loadedUserPfp;
  userName: string = '';
  loading: boolean = true;
  isModalOpen: boolean = false;
  isModal2Open: boolean = false;
  changesToImage: boolean = false;
  changesToEmail: boolean = false;
  selectedImageId: string = '1';
  selectedEmail: string = '';
  isEmailSelectorInitialized: boolean = false;
  showNotification: boolean = false;

  @ViewChild(ProfileselectorComponent) profileSelector!: ProfileselectorComponent;
  @ViewChild(EmailselectorComponent) emailSelector!: EmailselectorComponent;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private http: HttpClient,
    private sleepService: SleepService) { }

  openModal() {
    this.isModalOpen = true;
  }

  openModal2() {
    this.isModal2Open = true;
    this.isEmailSelectorInitialized = false;
  }

  closeModal() {
    this.isModalOpen = false;
    this.userPfp = this.selectedImageId;
    this.changesToImage = true;
  }

  closeModal2() {
    this.userEmail = this.editedEmail;
    this.isModal2Open = false;
    this.changesToEmail = true;
  }

  async displayNotification() {
    await this.sleepService.sleep(1000);
    this.showNotification = true;
    await this.sleepService.sleep(3000);
    this.showNotification = false;
  }

  applyChanges() {
    const updateUrl = `${this.globalService.apiEndpoint}/update`;
    const updatePayload = {
      newEmail: this.loadedUserEmail,
      newProfilePic: this.userPfp
    };

    this.http.post(updateUrl, updatePayload, { withCredentials: true })
      .subscribe(
        (response: any) => {
          console.log('Profile updated successfully:', response);
          this.displayNotification();
        },
        (error: any) => {
          console.error('Error updating profile:', error);
        }
      );
  }

  setImage(num: string) {
    switch (num) {
      case '1':
        return 'gus_lg.png';
      case '2':
        return 'horse_lg.png';
      case '3':
        return 'papa_lg.png';
      case '4':
        return 'troll_lg.png';
      default:
        return 'gus_lg.png';
    }
  }

  setEmail(em: string) {
    return em;
  }

  onProfileSelectorChange(newId: string) {
    this.selectedImageId = newId;
  }

  onEmailSelectorChange(newEmail: string) {
    this.selectedEmail = newEmail;
  }

  async checkNotification() {
    this.route.queryParams.subscribe(params => {
      if (params['notification'] === 'shown') {
        this.showNotification = true;

        this.sleepService.sleep(1000).then(() => {
          document.querySelector('.notification')?.classList.add('transparent');
        })

        this.sleepService.sleep(3000).then(() => {
          this.showNotification = false;

          this.router.navigate([], {
            queryParams: { notification: null },
            queryParamsHandling: 'merge'
          });
        });
      }
    });
  }

  ngOnInit(): void {
    console.log(this.loadedUserPfp);
    this.authService.getSessionInfo().subscribe(
      (data) => {
        console.log('Received session info:', data);
        this.loadedUserEmail = data.email;
        this.userEmail = this.loadedUserEmail;
        this.editedEmail = this.userEmail;
        this.userPfp = JSON.stringify(JSON.parse(data.profilePic) + 1);
        this.userName = data.username;
        this.loading = false;
        this.checkNotification();
      },
      (error) => {
        console.error('Error fetching session info:', error);
        this.loading = false;
      }
    );
  }

  ngAfterViewChecked(): void {
    if (this.isModal2Open && !this.isEmailSelectorInitialized && this.emailSelector) {
      this.emailSelector.setEmail(this.editedEmail);
      this.isEmailSelectorInitialized = true; 
    }
  }
}
