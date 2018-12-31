import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UnidadmedidatrabajoModel } from '../../modulo-sistema-config/tablas/unidadmedidatrabajo/unidadmedidatrabajo.model';
import { CrudHttpClientServiceShared } from 'src/app/shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'app-comp-find-unidad-medida-trabajo',
  templateUrl: './comp-find-unidad-medida-trabajo.component.html',
  styleUrls: ['./comp-find-unidad-medida-trabajo.component.scss']
})
export class CompFindUnidadMedidaTrabajoComponent implements OnInit {

  @Input()
  myControl = new FormControl();

  @Input()
  _formControlName: FormControl;

  @Output()
  getObject: EventEmitter<UnidadmedidatrabajoModel> = new EventEmitter();

  public ListUnidad: UnidadmedidatrabajoModel[] = [];

  constructor(private crudSevice: CrudHttpClientServiceShared) { }

  ngOnInit() {
    if (this._formControlName == undefined) {
      this._formControlName = this.myControl;
    }

    this.loadUnidad();
  }

  private loadUnidad(): void {
    this.crudSevice.getall('unidadmedidatrabajo', 'getall').subscribe((res: any) => this.ListUnidad = <UnidadmedidatrabajoModel[]>res);
  }

  _onSelectionChange(a, b) {
    this.getObject.emit(a.value);
  }

  compareUnidadMedidaTrabajo(c1: UnidadmedidatrabajoModel, c2: UnidadmedidatrabajoModel): boolean {
    return c1 && c2 ? c1.idUnidadMedidaTrabajo === c2.idUnidadMedidaTrabajo : c1 === c2;
  }

}
