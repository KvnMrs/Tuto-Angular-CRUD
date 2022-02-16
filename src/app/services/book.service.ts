import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection
} from '@angular/fire/firestore';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: Firestore) { }
  
  addBook(book: IBook) {
    const booksRef = collection(this.firestore, 'books'); 
    return addDoc(booksRef, book);
  }
}
