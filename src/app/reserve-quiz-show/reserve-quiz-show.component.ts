import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-reserve-quiz-show',
  templateUrl: './reserve-quiz-show.component.html',
  styleUrls: ['./reserve-quiz-show.component.css']
})

export class ReserveQuizShowComponent implements OnInit {
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  private newList :List;

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.newList = {
      datetime: '',
      prizeKind:'',
      amount:0,
      totalNumber: 0,
      winnerNumber: 0
    }
  }

  public onSubmit() {
    this.listServ.addList(this.newList).subscribe(
        response=> {
            console.log(response);
            if(response.success== true) {
                // this.addList.emit(this.newList);
            }
        },
    );
  }
}