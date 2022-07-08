import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Translation, translocoConfig, TranslocoModule, TranslocoService, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { TranslocoHttpLoader } from 'app/core/transloco/transloco.http-loader';
import { environment } from 'environments/environment';

@NgModule({
    exports  : [
        TranslocoModule
    ],
    providers: [
        {
            // Provide the default Transloco configuration
            provide : TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs      : [
                    {
                        id   : 'es',
                        label: 'Español'
                    },
                    {
                        id   : 'en',
                        label: 'English'
                    }
                ],
                defaultLang         : 'es',
                fallbackLang        : 'es',
                reRenderOnLangChange: true,
                prodMode            : environment.production
            })
        },
        {
            // Provide the default Transloco loader
            provide : TRANSLOCO_LOADER,
            useClass: TranslocoHttpLoader
        },
        {
            // Preload the default language before the app starts to prevent empty/jumping content
            provide   : APP_INITIALIZER,
            deps      : [TranslocoService],
            useFactory: (translocoService: TranslocoService): any => (): Promise<Translation> => {
                const defaultLang = translocoService.getDefaultLang();
                translocoService.setActiveLang(defaultLang);
                return translocoService.load(defaultLang).toPromise();
            },
            multi     : true
        }
    ]
})
export class TranslocoCoreModule
{
}
