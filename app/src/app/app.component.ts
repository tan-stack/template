import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent {

    public apiRes: WritableSignal<string> = signal<string>('');

    private readonly http: HttpClient = inject(HttpClient);

    public async onApiClick(): Promise<void> {
        const res: ApiResult<string> = await firstValueFrom(this.http.get<ApiResult<string>>('/api'));
        if (res.ok) {
            this.apiRes.set(res.data);
        }
    }

}
