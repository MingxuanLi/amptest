import {Component, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {MdInput} from "@angular/material";
import {AvatarsService} from "../services/avatars.service";

@Component({
    selector: 'app-avatars',
    templateUrl: './avatars.component.html',
    styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit{

    @ViewChild('nameInput') nameInput: MdInput;

    public avatar:string;
    public avatars:any;

    constructor(public avatarsService: AvatarsService) {}

    ngOnInit() {
        this.fetchAvatars();
    }

    onKey(event:any){
        let filter = '';
        if(event){
            filter = event.target.value;
        }
        this.fetchAvatars(filter);
    }

    fetchAvatars(filter?:string){
        this.avatarsService.getAvatars(filter).then((res) => {
            this.avatars = res;
        }, (err) => {
            console.log(err);
        });
    }
}
