import { Component } from '@angular/core';
import { FoodImage, SocialMedias } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  public foodImages: FoodImage[] = [
    { name: 'curry', imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/486cf7bf-5b42-4eb2-a683-5739d34456b8/Derivates/8f787124-9d92-4846-b054-a8ad20716766.jpg' },
    { name: 'lasagna', imageUrl: 'https://thumbor.unica.ro/unsafe/458x362/smart/filters:format(webp):contrast(8):quality(80)/https://retete.unica.ro/wp-content/uploads/2010/05/lasagna-cu-sos-de-roii-main.jpg' },
    { name: 'chocolate cake', imageUrl: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/202685_0-803-5447-5447.jpg' },
    { name: 'baked asparagus', imageUrl: 'https://foolproofliving.com/wp-content/uploads/2020/10/Baked-Asparagus-Recipe-Image.jpg' },
    { name: 'linkedin', imageUrl: 'https://static.youmiam.com/images/recipe/1500x1000/sauce-pour-nachos-1715?placeholder=web_recipe&sig=89089c0a2eaac6ceef75d4e4e1e40fc30eabf803&v2' },
    { name: 'edamame food', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/red-cabbage-with-carrot-edamame-beans-d11286a.jpg?quality=90&resize=556,505' }
  ];

  public socialMedias: SocialMedias[] = [
    { name: 'facebook', code: 'fa fa-facebook' },
    { name: 'instagram', code: 'fa fa-instagram' },
    { name: 'twitter', code: 'fa fa-twitter' },
    { name: 'linkedin', code: 'fa fa-linkedin' },
    { name: 'google', code: 'fa fa-google' },
    { name: 'youtube', code: 'fa fa-youtube' },

  ];

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
