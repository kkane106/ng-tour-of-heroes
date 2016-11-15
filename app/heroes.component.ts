import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: '<my-heroes>',
    templateUrl: '../app/heroes.component.html',
    styleUrls: [
        '../app/heroes.component.css'
    ]
})
export class HeroesComponent implements OnInit {

    constructor(
        private heroService:HeroService,
        private router:Router
    ) { }

    currentHero:Hero;
    heroes:Hero[];

    assignCurrentHero(hero:Hero):void {
        this.currentHero = hero;
    }
    
    gotoDetail() {
        this.router.navigate(['/detail', this.currentHero.id]);
    }


    ngOnInit() {
        this.heroService.getHeroes().then(
            (heroes) => this.heroes = heroes
        );
    }
}