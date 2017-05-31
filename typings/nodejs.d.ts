declare namespace NodeJS  {
    export interface Global {
        document: Document;
        navigator: Navigator;
        window: Window;
    }
}