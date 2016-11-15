import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId:module.id,
    selector: 'my-hero-detail',
    templateUrl: '../app/hero-detail.component.html' 
})
export class HeroDetailComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input()
    hero:Hero;

    ngOnInit():void {
        console.log("in init")
        console.log(this.route.params)
        this.route.params
            .switchMap((params:Params) => 
        this.heroService.getHero(Number.parseInt(params['id'])))
            .subscribe((hero) => this.hero = hero)
    }

    goBack():void {
        this.location.back();
    }
}