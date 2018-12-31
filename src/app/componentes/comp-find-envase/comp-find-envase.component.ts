import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnvaseModel } from '../../modulo-sistema-config/tablas/envase/envase.model';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'app-comp-find-envase',
  templateUrl: './comp-find-envase.component.html',
  styleUrls: ['./comp-find-envase.component.scss']
})
export class CompFindEnvaseComponent implements OnInit {

  @Input()
  myControl = new FormControl();

  @Input()
  _formControlName: FormControl;

  @Output()
  getObject: EventEmitter<EnvaseModel> = new EventEmitter();

  public ListEnvase: EnvaseModel[] = [];

  constructor(private crudSevice: CrudHttpClientServiceShared) { }

  ngOnInit() {
    if (this._formControlName == undefined) {
      this._formControlName = this.myControl;
    }

    this.loadEnvase();
  }

  private loadEnvase(): void {
    this.crudSevice.getall('envase', 'getall').subscribe((res: any) => this.ListEnvase = <EnvaseModel[]>res);
  }

  _onSelectionChange(a, b) {
    this.getObject.emit(a.value);
  }

  compareEnvase(c1: EnvaseModel, c2: EnvaseModel): boolean {
    return c1 && c2 ? c1.idEnvase === c2.idEnvase : c1 === c2;
  }

}
