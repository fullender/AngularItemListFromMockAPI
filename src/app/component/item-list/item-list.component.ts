import { Component, OnInit } from '@angular/core';
import { ItemList } from 'src/app/models/item-list.model';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  dataSource: ItemList[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.itemService.GetItems().subscribe(
    {
      next: (response: ItemList[]) => { this.dataSource = response; }
    });

  }

}
