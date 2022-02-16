import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData, doc, deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  getBooks(): Observable<IBook[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'id' }) as Observable<IBook[]>;
  }

  deleteBook(book: IBook) {
    const bookDocRef = doc(this.firestore, `books/${book.id}`);
    return deleteDoc(bookDocRef);
}
}
