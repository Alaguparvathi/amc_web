import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DbService} from 'src/app/db.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  PartForm: FormGroup;
  submitted = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private db:DbService) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Water Purifier vessel' },
      { item_id: 2, item_text: 'Dow Membrance' },
      { item_id: 3, item_text: 'Water Purifier Pump' },
      { item_id: 4, item_text: 'UV Choke' },
      { item_id: 5, item_text: 'Water Purifier Carbon' },
      { item_id: 6, item_text: 'Ro float value & Switch' },
      { item_id: 7, item_text: 'Sediment Filter' },
      { item_id: 8, item_text: 'RO Mineral cartridge' }
    

    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 8,
      allowSearchFilter: true
    };
    this.PartForm = this.formBuilder.group({
    
      PartID: ['', Validators.required],
      Accessories: ['', Validators.required],
      SKU: ['', Validators.required],
      
      Description: ['', Validators.required],

    });
  }
  get f() { return this.PartForm.controls; }

    onSubmit() {
        this.submitted = true;

        
        if (this.PartForm.invalid) {
            return;
        }

        console.log(this.PartForm.value)
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.PartForm.value, null, 4));
        this.db.postSpareParts(this.PartForm.value);
    }

    onReset() {
        this.submitted = false;
        this.PartForm.reset();
    }
    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }

}

