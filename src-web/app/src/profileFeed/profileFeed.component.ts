import {Component} from "@angular/core";
import {ProfileInfoComponent} from "../profileInfo/profileInfo.component";
@Component({
    moduleId: module.id,
    selector: 'profile-feed',
    templateUrl: 'profileFeed.component.html',
    styleUrls: ['profileFeed.component.css'],
    directives: [ProfileInfoComponent]
})
export class ProfileFeedComponent {

}