import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:1337/api/heroes';
    private headers = new Headers({
        'Content-Type' : 'application/json'
    });

    constructor(private http: Http) { }

    private heroes:Hero[] = HEROES;

    public  getHeroes() : Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    public getHero(id) : Promise<Hero> {
        return this.getHeroes()
            .then((heroes) => {
                return heroes.find((hero) => hero.id === id)
            })
    }

    public update(hero:Hero):Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers : this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('an error occured', error);

        return Promise.reject(error.message || error);
    }
}