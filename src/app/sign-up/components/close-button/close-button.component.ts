import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
})
export class CloseButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  click(): void {
    this.router.navigate(['/']);
  }
}
