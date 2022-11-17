import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiServerUrl}/articles`);
  }

  public addArticles(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiServerUrl}/articles/add`, article);
  }

  public updateArticles(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiServerUrl}/articles/update`, article);
  }

  public getById(id: any): Observable<Article> {
    return this.http.get<Article>(this.apiServerUrl + '/articles/find' + id)

  }

}
