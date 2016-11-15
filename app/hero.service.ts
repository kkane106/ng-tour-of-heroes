import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroes:Hero[] = HEROES;

    public  getHeroes() : Promise<Hero[]> {
        return Promise.resolve(this.heroes);
    }
}