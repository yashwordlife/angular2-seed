System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng, core_1;
    var BaseChart;
    return {
        setters:[
            function (ng_1) {
                ng = ng_1;
                core_1 = ng_1;
            }],
        execute: function() {
            BaseChart = (function () {
                function BaseChart(element) {
                    this.element = element;
                    this.data = [];
                    this.labels = [];
                    this.options = { responsive: true };
                    this.series = [];
                    this.colours = [];
                    this.chartClick = new core_1.EventEmitter();
                    this.chartHover = new core_1.EventEmitter();
                    this.initFlag = false;
                    this.defaultsColours = [
                        {
                            fillColor: 'rgba(151,187,205,0.2)',
                            strokeColor: 'rgba(151,187,205,1)',
                            pointColor: 'rgba(151,187,205,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(151,187,205,0.8)',
                            color: 'rgba(151,187,205,1)',
                            highlight: 'rgba(151,187,205,0.8)'
                        }, {
                            fillColor: 'rgba(220,220,220,0.2)',
                            strokeColor: 'rgba(220,220,220,1)',
                            pointColor: 'rgba(220,220,220,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(220,220,220,0.8)',
                            color: 'rgba(220,220,220,1)',
                            highlight: 'rgba(220,220,220,0.8)'
                        }, {
                            fillColor: 'rgba(247,70,74,0.2)',
                            strokeColor: 'rgba(247,70,74,1)',
                            pointColor: 'rgba(247,70,74,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(247,70,74,0.8)',
                            color: 'rgba(247,70,74,1)',
                            highlight: 'rgba(247,70,74,0.8)'
                        }, {
                            fillColor: 'rgba(70,191,189,0.2)',
                            strokeColor: 'rgba(70,191,189,1)',
                            pointColor: 'rgba(70,191,189,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(70,191,189,0.8)',
                            color: 'rgba(70,191,189,1)',
                            highlight: 'rgba(70,191,189,0.8)'
                        }, {
                            fillColor: 'rgba(253,180,92,0.2)',
                            strokeColor: 'rgba(253,180,92,1)',
                            pointColor: 'rgba(253,180,92,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(253,180,92,0.8)',
                            color: 'rgba(253,180,92,1)',
                            highlight: 'rgba(253,180,92,0.8)'
                        }, {
                            fillColor: 'rgba(148,159,177,0.2)',
                            strokeColor: 'rgba(148,159,177,1)',
                            pointColor: 'rgba(148,159,177,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(148,159,177,0.8)',
                            color: 'rgba(148,159,177,1)',
                            highlight: 'rgba(148,159,177,0.8)'
                        }, {
                            fillColor: 'rgba(77,83,96,0.2)',
                            strokeColor: 'rgba(77,83,96,1)',
                            pointColor: 'rgba(77,83,96,1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(77,83,96,0.8)',
                            color: 'rgba(77,83,96,1)',
                            highlight: 'rgba(77,83,96,0.8)'
                        }];
                }
                BaseChart.prototype.ngOnInit = function () {
                    this.ctx = this.element.nativeElement.children[0].children[0].getContext('2d');
                    this.parent = this.element.nativeElement.children[0];
                    this.refresh();
                    this.initFlag = true;
                };
                BaseChart.prototype.ngOnChanges = function (changes) {
                    if (this.initFlag) {
                        this.refresh();
                    }
                };
                BaseChart.prototype.ngOnDestroy = function () {
                    if (this.chart) {
                        this.chart.destroy();
                        this.chart = null;
                    }
                    if (this.legendTemplate) {
                        this.legendTemplate.destroy();
                        this.legendTemplate = null;
                    }
                };
                BaseChart.prototype.setLegend = function () {
                    var list = this.parent.getElementsByTagName('ul');
                    if (list.length) {
                        list[0].remove();
                        this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
                    }
                    else {
                        this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
                    }
                };
                BaseChart.prototype.getColour = function (colour) {
                    return {
                        fillColor: this.rgba(colour, 0.2),
                        strokeColor: this.rgba(colour, 1),
                        pointColor: this.rgba(colour, 1),
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: this.rgba(colour, 0.8),
                        color: this.rgba(colour, 1),
                        highlight: this.rgba(colour, 0.8)
                    };
                };
                BaseChart.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                BaseChart.prototype.rgba = function (colour, alpha) {
                    return 'rgba(' + colour.concat(alpha).join(',') + ')';
                };
                BaseChart.prototype.click = function (evt) {
                    console.log("Clicked");
                    var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
                    var activePoints = atEvent.call(this.chart, evt);
                    console.log(activePoints[0]);
                    if (activePoints.length > 0) {
                        console.log("Inside this");
                        var activeLabel = activePoints[0].label;
                        this.chartClick.emit(activeLabel);
                    }
                };
                BaseChart.prototype.hover = function (evt) {
                    var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
                    var activePoints = atEvent.call(this.chart, evt);
                    if (activePoints.length > 0) {
                        var activeLabel = activePoints[0].label;
                        var activePoint = activePoints[0].value;
                        this.chartHover.emit({ activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel });
                    }
                };
                BaseChart.prototype.getChartBuilder = function (ctx, data, options) {
                    return new Chart(ctx)[this.chartType](data, options);
                };
                BaseChart.prototype.getDataObject = function (label, value) {
                    if (this.chartType === 'Line'
                        || this.chartType === 'Bar'
                        || this.chartType === 'Radar') {
                        return {
                            label: label,
                            data: value
                        };
                    }
                    if (this.chartType === 'Pie'
                        || this.chartType === 'Doughnut'
                        || this.chartType === 'PolarArea') {
                        return {
                            label: label,
                            value: value
                        };
                    }
                    return null;
                };
                BaseChart.prototype.getChartData = function (labels, dataObject) {
                    if (this.chartType === 'Line'
                        || this.chartType === 'Bar'
                        || this.chartType === 'Radar') {
                        return {
                            labels: labels,
                            datasets: dataObject
                        };
                    }
                    if (this.chartType === 'Pie'
                        || this.chartType === 'Doughnut'
                        || this.chartType === 'PolarArea') {
                        return dataObject;
                    }
                };
                BaseChart.prototype.refresh = function () {
                    var _this = this;
                    if (this.options.responsive && this.parent.clientHeight === 0) {
                        return setTimeout(function () { return _this.refresh(); }, 50);
                    }
                    this.ngOnDestroy();
                    var dataset = [];
                    for (var i = 0; i < this.data.length; i++) {
                        var colourDesc = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
                        var colour = i < this.colours.length ? this.colours[i] : this.defaultsColours[i] || this.getColour(colourDesc);
                        var data_1 = Object.assign(colour, this.getDataObject(this.series[i] || this.labels[i], this.data[i]));
                        dataset.push(data_1);
                    }
                    var data = this.getChartData(this.labels, dataset);
                    this.chart = this.getChartBuilder(this.ctx, data, this.options);
                    if (this.legend) {
                        this.setLegend();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], BaseChart.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], BaseChart.prototype, "labels", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BaseChart.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BaseChart.prototype, "chartType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], BaseChart.prototype, "series", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], BaseChart.prototype, "colours", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], BaseChart.prototype, "legend", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BaseChart.prototype, "chartClick", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BaseChart.prototype, "chartHover", void 0);
                BaseChart = __decorate([
                    ng.Component({
                        selector: 'base-chart',
                        template: "\n<div><canvas style=\"cursor : pointer\" (click)=\"click($event)\"></canvas></div>\n            "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], BaseChart);
                return BaseChart;
            }());
            exports_1("BaseChart", BaseChart);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBbUZJLG1CQUFvQixPQUFtQjtvQkFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFsRjlCLFNBQUksR0FBZSxFQUFFLENBQUM7b0JBQ3RCLFdBQU0sR0FBZSxFQUFFLENBQUM7b0JBQ3hCLFlBQU8sR0FBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFFcEMsV0FBTSxHQUFlLEVBQUUsQ0FBQztvQkFDeEIsWUFBTyxHQUFlLEVBQUUsQ0FBQztvQkFFeEIsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO29CQUNyQyxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7b0JBTXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzFCLG9CQUFlLEdBQWU7d0JBQ2xDOzRCQUNJLFNBQVMsRUFBRSx1QkFBdUI7NEJBQ2xDLFdBQVcsRUFBRSxxQkFBcUI7NEJBQ2xDLFVBQVUsRUFBRSxxQkFBcUI7NEJBQ2pDLGdCQUFnQixFQUFFLE1BQU07NEJBQ3hCLGtCQUFrQixFQUFFLE1BQU07NEJBQzFCLG9CQUFvQixFQUFFLHVCQUF1Qjs0QkFDN0MsS0FBSyxFQUFFLHFCQUFxQjs0QkFDNUIsU0FBUyxFQUFFLHVCQUF1Qjt5QkFDckMsRUFBRTs0QkFDQyxTQUFTLEVBQUUsdUJBQXVCOzRCQUNsQyxXQUFXLEVBQUUscUJBQXFCOzRCQUNsQyxVQUFVLEVBQUUscUJBQXFCOzRCQUNqQyxnQkFBZ0IsRUFBRSxNQUFNOzRCQUN4QixrQkFBa0IsRUFBRSxNQUFNOzRCQUMxQixvQkFBb0IsRUFBRSx1QkFBdUI7NEJBQzdDLEtBQUssRUFBRSxxQkFBcUI7NEJBQzVCLFNBQVMsRUFBRSx1QkFBdUI7eUJBQ3JDLEVBQUU7NEJBQ0MsU0FBUyxFQUFFLHFCQUFxQjs0QkFDaEMsV0FBVyxFQUFFLG1CQUFtQjs0QkFD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QUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBck9EO29CQUFDLFlBQUssRUFBRTs7dURBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzt5REFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzBEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NERBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzt5REFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzBEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7eURBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzs2REFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7OzZEQUFBO2dCQWhCYjtvQkFBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsbUdBRUQ7cUJBQ1osQ0FBQzs7NkJBQUE7Z0JBeU9GLGdCQUFDO1lBQUQsQ0F2T0EsQUF1T0MsSUFBQTtZQXZPRCxpQ0F1T0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jaGFydHMvY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbmcgZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBuZy5Db21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmFzZS1jaGFydCcsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXY+PGNhbnZhcyBzdHlsZT1cImN1cnNvciA6IHBvaW50ZXJcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvY2FudmFzPjwvZGl2PlxuICAgICAgICAgICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhc2VDaGFydCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7IHJlc3BvbnNpdmU6IHRydWUgfTtcbiAgICBASW5wdXQoKSBjaGFydFR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzZXJpZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxhbnk+ID0gW107XG4gICAgQElucHV0KCkgbGVnZW5kOiBib29sZWFuO1xuICAgIEBPdXRwdXQoKSBjaGFydENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNoYXJ0SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIHByaXZhdGUgY3R4OiBhbnk7XG4gICAgcHJpdmF0ZSBwYXJlbnQ6IGFueTtcbiAgICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gICAgcHJpdmF0ZSBsZWdlbmRUZW1wbGF0ZTogYW55O1xuICAgIHByaXZhdGUgaW5pdEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGRlZmF1bHRzQ29sb3VyczogQXJyYXk8YW55PiA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsbENvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwwLjIpJyxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwxKScsXG4gICAgICAgICAgICBwb2ludENvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwxKScsXG4gICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSgxNTEsMTg3LDIwNSwwLjgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwxKScsXG4gICAgICAgICAgICBoaWdobGlnaHQ6ICdyZ2JhKDE1MSwxODcsMjA1LDAuOCknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMC4yKScsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMjIwLDIyMCwyMjAsMC44KScsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiAncmdiYSgyMjAsMjIwLDIyMCwwLjgpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmaWxsQ29sb3I6ICdyZ2JhKDI0Nyw3MCw3NCwwLjIpJyxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgyNDcsNzAsNzQsMSknLFxuICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoMjQ3LDcwLDc0LDEpJyxcbiAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICdyZ2JhKDI0Nyw3MCw3NCwwLjgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNDcsNzAsNzQsMSknLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiAncmdiYSgyNDcsNzAsNzQsMC44KSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmlsbENvbG9yOiAncmdiYSg3MCwxOTEsMTg5LDAuMiknLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDcwLDE5MSwxODksMSknLFxuICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoNzAsMTkxLDE4OSwxKScsXG4gICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSg3MCwxOTEsMTg5LDAuOCknLFxuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDcwLDE5MSwxODksMSknLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiAncmdiYSg3MCwxOTEsMTg5LDAuOCknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ3JnYmEoMjUzLDE4MCw5MiwwLjIpJyxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgyNTMsMTgwLDkyLDEpJyxcbiAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDI1MywxODAsOTIsMSknLFxuICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMjUzLDE4MCw5MiwwLjgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTMsMTgwLDkyLDEpJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogJ3JnYmEoMjUzLDE4MCw5MiwwLjgpJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmaWxsQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuMiknLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICdyZ2JhKDE0OCwxNTksMTc3LDAuOCknLFxuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogJ3JnYmEoMTQ4LDE1OSwxNzcsMC44KSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZmlsbENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludENvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSg3Nyw4Myw5NiwwLjgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBoaWdobGlnaHQ6ICdyZ2JhKDc3LDgzLDk2LDAuOCknXG4gICAgICAgIH1dO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5pbml0RmxhZykge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGVnZW5kVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMubGVnZW5kVGVtcGxhdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5sZWdlbmRUZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMZWdlbmQoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5wYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJyk7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdFswXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jaGFydC5nZW5lcmF0ZUxlZ2VuZCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jaGFydC5nZW5lcmF0ZUxlZ2VuZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbG91cihjb2xvdXI6IEFycmF5PG51bWJlcj4pOiBhbnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLnJnYmEoY29sb3VyLCAwLjIpLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHRoaXMucmdiYShjb2xvdXIsIDEpLFxuICAgICAgICAgICAgcG9pbnRDb2xvcjogdGhpcy5yZ2JhKGNvbG91ciwgMSksXG4gICAgICAgICAgICBwb2ludFN0cm9rZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICcjZmZmJyxcbiAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0U3Ryb2tlOiB0aGlzLnJnYmEoY29sb3VyLCAwLjgpLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMucmdiYShjb2xvdXIsIDEpLFxuICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnJnYmEoY29sb3VyLCAwLjgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cblxuICAgIHJnYmEoY29sb3VyLCBhbHBoYSkge1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIGNvbG91ci5jb25jYXQoYWxwaGEpLmpvaW4oJywnKSArICcpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xpY2soZXZ0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZFwiKTtcbiAgICAgICAgbGV0IGF0RXZlbnQgPSB0aGlzLmNoYXJ0LmdldFBvaW50c0F0RXZlbnQgfHwgdGhpcy5jaGFydC5nZXRCYXJzQXRFdmVudCB8fCB0aGlzLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudDtcbiAgICAgICAgbGV0IGFjdGl2ZVBvaW50cyA9IGF0RXZlbnQuY2FsbCh0aGlzLmNoYXJ0LCBldnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQb2ludHNbMF0pO1xuICAgICAgICBpZiAoYWN0aXZlUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIHRoaXNcIik7XG4gICAgICAgICAgICBsZXQgYWN0aXZlTGFiZWwgPSBhY3RpdmVQb2ludHNbMF0ubGFiZWw7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVMYWJlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaG92ZXIoZXZ0KSB7XG4gICAgICAgIGxldCBhdEV2ZW50ID0gdGhpcy5jaGFydC5nZXRQb2ludHNBdEV2ZW50IHx8IHRoaXMuY2hhcnQuZ2V0QmFyc0F0RXZlbnQgfHwgdGhpcy5jaGFydC5nZXRTZWdtZW50c0F0RXZlbnQ7XG4gICAgICAgIGxldCBhY3RpdmVQb2ludHMgPSBhdEV2ZW50LmNhbGwodGhpcy5jaGFydCwgZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2ZVBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlTGFiZWwgPSBhY3RpdmVQb2ludHNbMF0ubGFiZWw7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUG9pbnQgPSBhY3RpdmVQb2ludHNbMF0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdCh7IGFjdGl2ZVBvaW50czogYWN0aXZlUG9pbnRzLCBhY3RpdmVQb2ludDogYWN0aXZlUG9pbnQsIGFjdGl2ZUxhYmVsOiBhY3RpdmVMYWJlbCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENoYXJ0QnVpbGRlcihjdHg6IGFueSwgZGF0YTogQXJyYXk8YW55Piwgb3B0aW9uczogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhcnQoY3R4KVt0aGlzLmNoYXJ0VHlwZV0oZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YU9iamVjdChsYWJlbDogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSAnTGluZSdcbiAgICAgICAgICAgIHx8IHRoaXMuY2hhcnRUeXBlID09PSAnQmFyJ1xuICAgICAgICAgICAgfHwgdGhpcy5jaGFydFR5cGUgPT09ICdSYWRhcicpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSAnUGllJ1xuICAgICAgICAgICAgfHwgdGhpcy5jaGFydFR5cGUgPT09ICdEb3VnaG51dCdcbiAgICAgICAgICAgIHx8IHRoaXMuY2hhcnRUeXBlID09PSAnUG9sYXJBcmVhJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcnREYXRhKGxhYmVsczogYW55LCBkYXRhT2JqZWN0OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSAnTGluZSdcbiAgICAgICAgICAgIHx8IHRoaXMuY2hhcnRUeXBlID09PSAnQmFyJ1xuICAgICAgICAgICAgfHwgdGhpcy5jaGFydFR5cGUgPT09ICdSYWRhcicpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IGRhdGFPYmplY3RcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcnRUeXBlID09PSAnUGllJ1xuICAgICAgICAgICAgfHwgdGhpcy5jaGFydFR5cGUgPT09ICdEb3VnaG51dCdcbiAgICAgICAgICAgIHx8IHRoaXMuY2hhcnRUeXBlID09PSAnUG9sYXJBcmVhJykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFPYmplY3Q7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlICYmIHRoaXMucGFyZW50LmNsaWVudEhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWZyZXNoKCksIDUwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgICAgbGV0IGRhdGFzZXQ6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbG91ckRlc2M6IEFycmF5PG51bWJlcj4gPSBbdGhpcy5nZXRSYW5kb21JbnQoMCwgMjU1KSwgdGhpcy5nZXRSYW5kb21JbnQoMCwgMjU1KSwgdGhpcy5nZXRSYW5kb21JbnQoMCwgMjU1KV07XG4gICAgICAgICAgICBsZXQgY29sb3VyID0gaSA8IHRoaXMuY29sb3Vycy5sZW5ndGggPyB0aGlzLmNvbG91cnNbaV0gOiB0aGlzLmRlZmF1bHRzQ29sb3Vyc1tpXSB8fCB0aGlzLmdldENvbG91cihjb2xvdXJEZXNjKTtcblxuICAgICAgICAgICAgbGV0IGRhdGE6IGFueSA9ICg8YW55Pk9iamVjdCkuYXNzaWduKGNvbG91cixcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFPYmplY3QodGhpcy5zZXJpZXNbaV0gfHwgdGhpcy5sYWJlbHNbaV0sIHRoaXMuZGF0YVtpXSkpO1xuXG4gICAgICAgICAgICBkYXRhc2V0LnB1c2goZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5nZXRDaGFydERhdGEodGhpcy5sYWJlbHMsIGRhdGFzZXQpO1xuICAgICAgICB0aGlzLmNoYXJ0ID0gdGhpcy5nZXRDaGFydEJ1aWxkZXIodGhpcy5jdHgsIGRhdGEsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVnZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNldExlZ2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
