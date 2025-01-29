import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  opened = false;
  
  constructor(private menueService: MenuService) { 
    this.menueService.isOpen.subscribe(data => {
      this.opened = data;
    })
  }

  ngOnInit(): void {
  }

}
