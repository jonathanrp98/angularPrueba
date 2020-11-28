import {Component, OnInit} from '@angular/core';
import {ObjectBook} from 'src/app/Model/bookDomain/objectBook';
import {BookService} from 'src/app/Service/book.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  libro: ObjectBook = {} as ObjectBook;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }


  crear() {
    console.log(this.libro);
    this.libro.author = 'jona';
    this.libro.price = 2000;
    this.libro.available = true;
    this.libro.publicationDate = '2020-11-28T01:03:31.800Z';
    this.libro.name = 'prueba';
    this.bookService.crearLibros(this.libro).subscribe((response) => {
      console.log(response);
    });
  }


}
