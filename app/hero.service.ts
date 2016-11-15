import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroes:Hero[] = HEROES;

    public  getHeroes() : Promise<Hero[]> {
        return Promise.resolve(this.heroes);
    }

    public getHero(id) : Promise<Hero> {
        return this.getHeroes()
            .then((heroes) => {
                return heroes.find((hero) => hero.id === id)
            })
    }
}