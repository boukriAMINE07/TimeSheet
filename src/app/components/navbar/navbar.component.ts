import {Component, Input, OnInit} from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor( ) { }

  ngOnInit(): void {

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
