import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor( private bookService: BookService,) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: IBook[]) => {
      this.books = res;
    })
  }

}
