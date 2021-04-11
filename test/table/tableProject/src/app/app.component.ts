import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (
    private dataService: DataServiceService,
  ){}

  public productData = [
    {
      productName: 'Samsung M31S',
      productPrice: 200,
      productCategory: 'mobile phone'
    },
    {
      productName: 'Lays',
      productPrice: 2,
      productCategory: 'snack'
    },
    {
      productName: 'Vneck tshirt',
      productPrice: 20,
      productCategory: 'clothing'
    },
    {
      productName: 'shorts',
      productPrice: 15,
      productCategory: 'clothing'
    },
    {
      productName: 'Sprite',
      productPrice: 10,
      productCategory: 'beverage'
    },
    {
      productName: 'Power Bank',
      productPrice: 21,
      productCategory: 'electronics'
    },
    {
      productName: 'bulb',
      productPrice: 4,
      productCategory: 'electronics'
    },
    {
      productName: 'egss',
      productPrice: 6,
      productCategory: 'food'
    },
    {
      productName: 'flour',
      productPrice: 50,
      productCategory: 'food'
    },
    {
      productName: 'knife',
      productPrice: 7,
      productCategory: 'utensils'
    },
    {
      productName: 'peeler',
      productPrice: 7,
      productCategory: 'utensils'
    },
    {
      productName: 'pen',
      productPrice: 3,
      productCategory: 'study'
    },
    {
      productName: 'highlighter',
      productPrice: 1,
      productCategory: 'study'
    }
  ];

  public sortName = '';
  public sortPrice = '';
  public sortCategory = '';
  public ngOnInit () {
    //the URL is not working giving 404 not found error.
    this.getData();
    console.log(this.productData);
  }

  public getData () {
    this.dataService.getTableData()
      .subscribe((result) => {
        console.log(result);
      });
  }

  public sortBy (column, sortDir) {
    switch (column) {
      case 'name': {
        if (!sortDir) {
          this.sortName = 'asc';
        } else {
          this.sortName = this.sortName === 'asc' ? 'desc' : 'asc';
        }
        this.sortData(column, this.sortName);
        break;
      }
      case 'price': {
        if (!sortDir) {
          this.sortPrice = 'asc';
        } else {
          this.sortPrice = this.sortPrice === 'asc' ? 'desc' : 'asc';
        }
        this.sortData(column, this.sortPrice);
        break;
      }
      case 'category': {
        if (!sortDir) {
          this.sortCategory = 'asc';
        } else {
          this.sortCategory = this.sortCategory === 'asc' ? 'desc' : 'asc';
        }
        this.sortData(column, this.sortCategory);
        break;
      }
      default: {
        break;
      }
    }
  }

  public sortData (column, sortDir) {
      switch (column) {
        case 'name': {
          this.productData.sort((a, b) => {
            let x = a.productName.toLowerCase();
            let y = b.productName.toLowerCase();
            if (x > y) {
              return -1;
            }
            if (x < y) {
              return 1;
            }
            return 0;
          });
          break;
        }
        case 'price': {
          this.productData = this.productData.sort((a, b) => a.productPrice - b.productPrice);
          break;
        }
        case 'category': {
          this.productData.sort((a, b) => {
            let x = a.productCategory.toLowerCase();
            let y = b.productCategory.toLowerCase();
            if (x > y) {
              return -1;
            }
            if (x < y) {
              return 1;
            }
            return 0;
          });
        }
      }
      this.productData = sortDir === 'asc' ? this.productData : this.productData.reverse();
  }
}
