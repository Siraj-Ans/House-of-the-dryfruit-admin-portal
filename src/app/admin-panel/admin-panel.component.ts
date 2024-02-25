import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  imports: [LucideAngularModule, RouterModule],
  standalone: true,
})
export class AdminPanelComponent {
  onLogout(): void {}
}
