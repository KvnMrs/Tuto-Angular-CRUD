import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: IBook = { name: '', author: '', genre: '', price: 0 };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).
      then(() => form.reset());
  }

}
