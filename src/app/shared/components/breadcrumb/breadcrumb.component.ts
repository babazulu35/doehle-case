import { SharedService } from './../../services/shared.service';
import { Component, EventEmitter, Input,Output,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  @Output() clickEvent = new EventEmitter<{clicked:boolean}>();
  
  @Input() crumbs;

  nullTitle;

  constructor(
    private sharedService:SharedService,
    private router: Router,
  ) { }

  ngOnInit(){
    
    
    this.crumbs = null;
    this.sharedService.pageInfo$.subscribe(pageInfo => {
      
      this.crumbs = pageInfo;
      
      if(this.crumbs == null) {
        this.crumbs = {title:'Dashboard',urls:[{title:'Dashboard',url:'/dashboard'}]};
        
      }
    })
    

  }
  actionEvent(event) {    
    this.clickEvent.emit({clicked:true});
  }

}
