export class FetchRequest {
    
    protected get(url: string): Promise<any> {
        return fetch(url, {method: 'GET'})
        .then((res: Response) => res.json())
        .then(data => data);
    }
}