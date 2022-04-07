import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showLoading()
  {
    Swal.fire(
      {
        title: 'Chargement...',
        timerProgressBar: true,
        didOpen: () => { Swal.showLoading() }
      });
  }

  showSuccess(text: string)
  {
    Swal.close();
    Swal.fire('Succès', text, 'success');

  }

  showError(text: string)
  {
    Swal.close();
    Swal.fire('Echec', text, 'error');
  }

  showInfo(title: string, message: string)
  {
    Swal.close();
    Swal.fire({
      title: `<small>${title}</small>`,
      text: message,
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#0d6efd',
      confirmButtonText: 'Ok',
    });
  }

  close()
  {
    Swal.close();
  }
}
