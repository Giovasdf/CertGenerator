import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';  // Importa el módulo html-to-pdfmake
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certifications: any;

    constructor(private certificationService:CertificationService){

    }
      ngOnInit(){
        this.getCertificates();
      }

      addCertification() {
        throw new Error('Method not implemented.');
      }

      async getCertificates(){
        this.certifications = await this.certificationService.getAllCertifications();
      }



      generateCertificate(certification: any): void {
        let htmlConvert = `
        <div id="certificateContent" class="container mt-4">
        <h1 class="display-4">Certificate of Completion</h1>
        <p class="lead">This is to certify that <strong>${certification?.expand?.user?.name}</strong> has successfully completed the course:</p>
        <p class="h3">${certification?.expand?.course?.name}</p>
        <p>Issued on: <strong>${new Date(certification.created).toLocaleDateString()}</strong></p>
        <p class="mt-4">To verify, visit <a href="localhost:4200/verify/${certification.id}" target="_blank">localhost:4200/verify/${certification.id}</a></p>
      </div>
      `
      const content = htmlToPdfmake(htmlConvert);


        let docDefinition ={
         content:[content]
        };
        pdfMake.createPdf(docDefinition).open();

      }
}

