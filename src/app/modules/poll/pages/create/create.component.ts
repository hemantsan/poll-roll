import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PollService } from '@app/core/services/poll-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  pollForm: FormGroup;
  optionsArray: Number[] = [1, 2, 3, 4];

  constructor(
    private router: Router,
    private pollService: PollService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  get f () {
    return this.pollForm.controls;
  }

  private initForm(): void {
    this.pollForm = new FormGroup({
      question: new FormControl('Demo question'),
      options: new FormArray([]),
    });

    this.optionsArray.map((data) => {
      (this.pollForm.get('options') as FormArray).push(new FormControl('option ' + data));
    });
  }

  onAddOption() {
    const control = new FormControl(null);
    (this.pollForm.get('options') as FormArray).push(control);
  }

  onSubmit() {
    const pollData = this.pollForm.value;
    this.pollService.createPoll(pollData).subscribe((result) => {
      console.log('yea');
    }, (err) => {
      console.log(err);
    });
    console.info(this.pollForm.value);
  }

}
