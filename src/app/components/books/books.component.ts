import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from 'src/app/modal/edit-book/edit-book.component';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor( private bookService: BookService,private modal: NgbModal) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: IBook[]) => {
      this.books = res;
    })
  }
  deleteBook(book: IBook) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook(book).then(() => 
       console.log('delete successful'));
    }}

    editModal(book: IBook) {
      const modalRef = this.modal.open(EditBookComponent, {
        size: 'lg',
        centered: true,
        windowClass: 'dark-modal',
      });
  
      modalRef.componentInstance.id = book.id;
    }

}
