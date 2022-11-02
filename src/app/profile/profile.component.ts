import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.messageService.update({severity:'success', summary:'Success', detail:'Profile Updated Successfully!'})
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }

}
