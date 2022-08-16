import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";

declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(private storageService: StorageService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        console.log(err);
      }
    });

    window.location.reload();
  }
  ngAfterViewInit() {

    (function ($) {
      $(document).ready( (function() {

        // Menu toggle for admin dashboard

        if ($("#nav-toggle").length) {
          $("#nav-toggle").on("click", function(e:any) {
            e.preventDefault();
            $("#db-wrapper").toggleClass("toggled");
          });

        }


        //  slimscroll for sidebar nav

        if ($(".nav-scroller").length) {
          $(".nav-scroller").slimScroll({
            height: "97%",
          });
        }



        // Notification dropdown scroll List

        if ($('.notification-list-scroll').length) {
          $(".notification-list-scroll").slimScroll({
            height: 300,
          });
        }



        // Default Tooltip




// Perfomance Chart

        if ($("#perfomanceChart").length) {
          var options = {
            series: [100, 78, 89],
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


                  background: 'transaprent',},
                dataLabels: {
                  show: false,

                }
              }
            },

          };


        }



// offcanvas




      }));
    })(jQuery);

  }





}
