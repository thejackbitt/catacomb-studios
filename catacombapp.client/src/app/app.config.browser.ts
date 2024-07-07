import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
            return new TranslateHttpLoader(http);
          },
          deps: [
            HttpClient
          ]
        }
      })
    )
  ]
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
