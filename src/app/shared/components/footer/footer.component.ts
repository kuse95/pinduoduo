import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface TabItem {
  group: number;
  title: string;
  image: string;
  imageSelected: string;
  link: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl'],
})
export class FooterComponent implements OnInit {
  @Input() tabList: Array<TabItem> = [
    {
      group: 1,
      image:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/ad7d9a33dd45afb5a2b689567a9ac125.png',
      imageSelected:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/1d59505185bd46c36d146a726d726f2b.png',
      title: '首页',
      link: '/home',
    },
    {
      group: 2,
      image:
        'http://t00img.yangkeduo.com/goods/2020-01-15/38b7c98dea4df6e5b8dd35f203b5f2ee.png',
      imageSelected:
        'http://t00img.yangkeduo.com/goods/2020-01-15/4e6fb66e95f52aec02d93edc43f48336.png',
      title: '关注',
      link: '/follow',
    },
    {
      group: 3,
      image:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/ad26a08f8626985e9dd38838105301d9.png',
      imageSelected:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/027faacb0dadbab87e906a6cae949c10.png',
      title: '分类',
      link: '/product',
    },
    {
      group: 4,
      image:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/8224b54fa98b6d9beace07ae0d931d30.png',
      imageSelected:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/3d135cff849342fe419c1d887a612042.png',
      title: '聊天',
      link: '/chat',
    },
    {
      group: 5,
      image:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/d3855210d03c124491786651f07dcc52.png',
      imageSelected:
        'http://t00img.yangkeduo.com/goods/images/2018-12-16/b2128cadce632f61ae053bd1216f4ea6.png',
      title: '个人中心',
      link: '/mine',
    },
  ];
  public selected = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSelectedItem(item, index) {
    this.selected = index;
    this.router.navigateByUrl(item.link);
  }
}
