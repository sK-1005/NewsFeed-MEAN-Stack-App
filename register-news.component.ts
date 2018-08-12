import { Component, OnInit } from '@angular/core';

import { NewsService} from '../core/news.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { TemplateRef } from '@angular/core';


@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.scss']
})
export class RegisterNewsComponent implements OnInit {
    
    id ='';
    title = '';
    user = '';
    time = '';
    time_Ago = '';
    comments_count = '';
    type:string = '';
    url = '';
    domain = '';
    points = '';
    public modalRef: BsModalRef;

    btndisabled = false;

    constructor(private rest: NewsService, private modalService: BsModalService) { }

    ngOnInit() {
      }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template); // {3}
      }


     validate(){
        if(this.title){
            if(this.user){
                if(this.url){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }

      }

    async registerNews(){
        this.btndisabled = true;
        try{
            if(this.validate()){
                await this.rest.post('http://localhost:3030/api/entryfeeds',
                {
                    title: this.title,
                    user: this.user,
                    url: this.url,
                    time: this.time,
                    comments_count: this.comments_count,
                    id: this.id,
                    domain: this.domain,
                    points: this.points
                });
            }
        }catch(error){
            console.log(error);
        }
        
        this.btndisabled = false;
        this.modalRef.hide();
    }
}
