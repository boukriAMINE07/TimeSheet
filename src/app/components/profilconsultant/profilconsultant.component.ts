import {Component, OnInit} from '@angular/core';
import {TaskOfConsultantService} from "../../services/task-of-consultant.service";
import {TaskOfConsultant} from "../../models/TaskOfConsultant.models";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Project} from "../../models/project.model";
import {StorageService} from "../../services/storage.service";
import {ConsultantService} from "../../services/consultant.service";


declare var jQuery: any;
let performanceTODO: number = 0;
let performanceDONE: number = 0;
let performancePROGRESS: number = 0;

@Component({
  selector: 'app-profilconsultant',
  templateUrl: './profilconsultant.component.html',
  styleUrls: ['./profilconsultant.component.css']
})
export class ProfilconsultantComponent implements OnInit {
  taskOfConsultants: TaskOfConsultant[] = []
  listTaskOfConsultants: TaskOfConsultant[] = []
  currentUser: any;
  nbrToDo: number = 0
  nbrInProgress: number = 0
  nbrDone: number = 0
  totalState: number = 0
  performanceTOOD: number = 0
  performanceDONE: number = 0
  performancePROGRESS: number = 0
  formGroup!: FormGroup
  currentTaskOfConsultant: TaskOfConsultant = {
    id: 0,
    task: {
      id: 0,
      name: '',
      description: '',
      project: {
        id: 0,
        name: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        totalHours: 0,
      }
    },
    state: '',
    user: {
      id: 0,
      email: '',
      password: '',
      username: '',
      phone: 0,
      roles: [{
        id: 0,
        name: ''
      }]
    },
    duration: 0
  }
  start='';
  end='';
  currentIndex = -1;
  name = '';
  taskName = '';
  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];


  constructor(private taskOfConsultantService: TaskOfConsultantService, private route: ActivatedRoute, private formBuilder: FormBuilder, private storageService: StorageService, private router: Router, private consultantService: ConsultantService) {

  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    //this.getTaskOfConsultant(this.currentUser.username)
    this.retrieveTaskOfConsultant()
    this.formGroup = this.formBuilder.group({
      duration: [''],
      state: ['']

    })


  }

  getAllTaskOfConsultant() {
    this.taskOfConsultantService.getAllTaskOfConsultantByConsultantName(this.currentUser.username)
      .subscribe(taskOfConsultant => {
        this.listTaskOfConsultants = taskOfConsultant
        //console.log(this.listTaskOfConsultants)
        this.totalState = this.listTaskOfConsultants.length
        this.calculState(this.listTaskOfConsultants);
        this.taskPerformance()

      });


  }

  calculState(liste: TaskOfConsultant[]) {
    liste.forEach(task => {
      if (task.state === 'TODO') {
        this.nbrToDo++
      } else if (task.state === 'DONE') {
        this.nbrDone++
      } else this.nbrInProgress++


    })
  }

  taskPerformance() {
    this.performanceTOOD = this.float2int((this.nbrToDo * 100) / this.totalState);
    this.performancePROGRESS = this.float2int((this.nbrInProgress * 100) / this.totalState);
    this.performanceDONE = this.float2int((this.nbrDone * 100) / this.totalState);
    performanceDONE = this.performanceDONE
    console.log("performanceDONE :   " + performanceDONE)
    performanceTODO = this.performanceTOOD
    console.log("performanceTODO :  " + performanceTODO)
    performancePROGRESS = this.performancePROGRESS
    console.log("performancePROGRESS : " + performancePROGRESS)
  }

  editConsultant() {
    const data = {
      id: this.currentUser.id,
      username: this.currentUser.username,
      email: this.currentUser.email,
      phone: this.currentUser.phone
    }
    this.consultantService.updateConsultant(this.currentUser.id, data)
      .subscribe(response => {
        console.log(response)
        this.storageService.editUser(this.currentUser)
        let ref = document.getElementById('Close1')
        ref?.click();

      }, error => {
        console.log(error);
      })

  }

  float2int(value: number) {
    return value | 0;
  }

  ngAfterViewInit() {
    this.getAllTaskOfConsultant();
    setTimeout(() => {
      (function ($) {
        $(document).ready((() => {

          if ($("#perfomanceChart").length) {
            var options = {
              series: [performanceDONE, performancePROGRESS, performanceTODO],
              chart: {
                height: 320,
                type: 'radialBar',
              },
              colors: ['#28a745', '#ffc107', '#dc3545'],
              stroke: {
                lineCap: "round",
              },
              plotOptions: {

                radialBar: {
                  startAngle: -168,
                  endAngle: -450,
                  hollow: {

                    size: '55%',
                  },
                  track: {

                    background: 'transaprent',
                  },
                  dataLabels: {
                    show: false,

                  }
                }
              },

            };
            var chart = new ApexCharts(document.querySelector("#perfomanceChart"), options);
            chart.render();

          }

        }));
      })(jQuery);
    }, 200);  //0.2s

  }
  reloadPerformance(): void {
        (function ($) {
          $(document).ready((() => {
            $("#perfomanceChart").load(location.href + " #perfomanceChart");
          }));
        })(jQuery);
  }

  getRequestParams(searchTaskOfConsultant: string, taskName: string,startDate:string,endDate:string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTaskOfConsultant) {
      params[`consultant`] = searchTaskOfConsultant;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    if (taskName) {
      params[`task`] = taskName;
    }
    if (startDate) {
      params[`start`] = startDate;
    }
    if (endDate) {
      params[`end`] = endDate;
    }
    return params;
  }

  retrieveTaskOfConsultant(): void {
    const params = this.getRequestParams(this.name, this.taskName, this.start,this.end,this.page, this.pageSize);
    this.taskOfConsultantService.getTaskOfConsultantByConsultantName(this.currentUser.username, params)
      .subscribe(
        response => {
          const {taskOfConsultants, totalItems} = response;
          this.taskOfConsultants = taskOfConsultants;
          // console.log(this.taskOfConsultants)
          this.count = totalItems;

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  filterByDate() {
    console.log(this.start)
    console.log(this.end)

      const params = this.getRequestParams(this.name, this.taskName, this.start,this.end,this.page, this.pageSize);
      this.taskOfConsultantService.getTaskOfConsultantByConsultantName(this.currentUser.username, params)
        .subscribe(
          response => {
            const {taskOfConsultants, totalItems} = response;
            this.taskOfConsultants = taskOfConsultants;
            console.log(this.taskOfConsultants)
            this.count = totalItems;


          },
          error => {
            console.log(error);
          });


  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTaskOfConsultant();
  }

  searchName(event: KeyboardEvent): void {
    this.taskName = (event.target as HTMLInputElement).value;
    this.page = 1;
    this.retrieveTaskOfConsultant();
  }


  currentDuration(taskOfConsulatnt: TaskOfConsultant) {
    this.currentTaskOfConsultant.id = taskOfConsulatnt.id
    this.formGroup.controls['duration'].setValue(taskOfConsulatnt.duration)
    this.formGroup.controls['state'].setValue(taskOfConsulatnt.state)
    //this.currentTaskOfConsultant.project_id=project.project_id;
    //this.formGroup.controls['totalHours'].setValue(project.totalHours)

  }


  UpdateHoursANDState() {
    this.currentTaskOfConsultant.duration = this.formGroup.value.duration;
    this.currentTaskOfConsultant.state = this.formGroup.value.state;
    this.taskOfConsultantService.updateHoursAndStates(this.currentTaskOfConsultant.id, this.currentTaskOfConsultant.duration, this.currentTaskOfConsultant.state)
      .subscribe(resp => {
        let ref = document.getElementById('Close')
        ref?.click();
        this.formGroup.reset()
        this.nbrDone = 0
        this.nbrToDo = 0
        this.nbrInProgress = 0
        this.ngAfterViewInit()
        this.reloadPerformance()

        this.retrieveTaskOfConsultant()
      }, error => {
        console.log(error)
      })
  }

  goToDetails(taskOfConsulatnt: TaskOfConsultant, idx: any) {

    this.router.navigate(['/consultant/single-taskOfConsultant/' + taskOfConsulatnt.id])
  }
}
