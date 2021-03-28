import {Component, OnInit} from '@angular/core';
import {ShipsService} from 'src/app/ships/services/ships.service';
import {Ship} from '../../models/ship';
import {DataShipList} from '../../models/data-ship-list';

declare var $: any;

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  baseUrlImages = 'https://starwars-visualguide.com/assets/img/starships/';

  dataList: DataShipList;
  selectedStarShip: Ship;

  constructor(private shipsService: ShipsService) {
  }

  ngOnInit(): void {
    this.pageChanged();
  }

  getStarshipImageUrl(url: string): string {
    const id: string = url.split('/')[5];
    return `${this.baseUrlImages}${id}.jpg`;
  }

  pageChanged(url?: string): void {
    this.shipsService.getShips(url).subscribe((dataShipList: DataShipList) => {
      this.dataList = dataShipList;
    });
  }

  openDetails(shipDetail: Ship): void {
    this.selectedStarShip = shipDetail;
    $('#exampleModal').modal('show');
  }


}
