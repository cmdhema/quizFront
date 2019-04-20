import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReserveQuizShowComponent } from './reserve-quiz-show/reserve-quiz-show.component';
import { QuizShowListComponent } from './quiz-show-list/quiz-show-list.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ReserveQuizShowComponent,
    QuizShowListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
