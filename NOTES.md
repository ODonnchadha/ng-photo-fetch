- So you want to wire up an Angular application to RxJS?

    - Add the HttpClientModule to the AppModule's list of imports.
    ```typescript
        import { HttpClientModule } from '@angular/common/http';

        imports: [
            BrowserModule, 
            HttpClientModule
        ],
    ```
    - NOTE: ERROR in node_modules/@angular/common/http/http.d.ts:2801:22 - error NG6002
    ```javascript
        npm cache verify
    ```

    - Use dependency injection to obtain access to the HttpClient within the associated service.
    ```typescript
    import { HttpClient } from '@angular/common/http';

    constructor(private client: HttpClient) { 
    }
    ```

    - Review the associated API's documentation.

    - Know your type definition RE: HttpClient and understand what is needed in the header request.

    - Add a new method to the service that will make/return a request.