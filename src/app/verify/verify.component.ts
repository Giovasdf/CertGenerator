import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountManagementService } from '../services/account-management.service';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements AfterViewInit{
  id:any
  certificate:any;
  constructor(private acti: ActivatedRoute, router: Router,private certificateService:CertificationService) {
    this.acti.paramMap.subscribe(params=>{

      this.id=params.get('id');

    })
  }


  ngAfterViewInit(): void {
    this.checkCertificate();
  }

  async checkCertificate(){
    this.certificate =  await this.certificateService.verifyValidCertificate(this.id);
    console.log(this.certificate);
  }

  isValidCertificate(): boolean {
    // Obtiene la fecha de creación del certificado
    const createdDate = new Date(this.certificate?.created);

    // Obtiene la fecha actual
    const currentDate = new Date();

    // Compara las fechas para determinar si el certificado sigue siendo válido
    return createdDate <= currentDate;
  }
}
