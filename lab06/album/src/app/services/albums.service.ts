import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

export interface Album {
    id: number;
    title: string;
}
  
interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

@Injectable({
    providedIn: 'root',
})
export class AlbumsService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
    
    constructor(private http: HttpClient) {}

    getAlbums(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getAlbum(id: number) {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
      }

    updateAlbum(id: number, album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.apiUrl}/albums/${id}`, album);
    }
      
      
    deleteAlbum(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }      

    getPhotos(albumId: number): Observable<any[]> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums/${albumId}/photos');
    }
}