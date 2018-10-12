import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs/internal/Subscription";
import {StateService} from "../../core/state.service";

@Component({
  selector: 'bhu-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private image: string;
  private text: string;
  private back: string;
  private find: string;
  private bhuva: string;
  private acknowledged= false;

  constructor(private route: ActivatedRoute, private stateService: StateService) { }

  public ngOnInit() {
    this.subscription = this.route
      .data
      .subscribe(v => {
        console.log(v);
        this.image = v["image"];
        this.text = v["text"];
        this.back = v["back"];
        this.find = v["find"];
        this.bhuva = v["bhuva"];
      });
  }

  public ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public ack() {
    this.acknowledged = true;
    if (!!this.bhuva) {
      this.stateService.findBhuva(this.bhuva);
    } else {
      this.stateService.findDog(this.find);
    }
  }
}
