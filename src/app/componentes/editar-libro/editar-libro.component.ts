import { Component, OnInit } from '@angular/core';
import {ObjectBook} from '../../Model/bookDomain/objectBook';
import {BookService} from 'src/app/Service/book.service';
import {ObjectResponse} from 'src/app/Model/objectResponse';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  listaLibros: Array<ObjectBook> = [] as Array<ObjectBook>;
  res: ObjectResponse = {} as ObjectResponse;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listaLibro();
  }


  listaLibro() {
    this.bookService.listaLibros().subscribe((response) => {
      this.listaLibros = JSON.parse(JSON.stringify(response.value));
    });
  }

}
