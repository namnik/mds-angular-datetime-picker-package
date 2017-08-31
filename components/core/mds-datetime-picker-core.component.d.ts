import { OnInit, EventEmitter } from '@angular/core';
import { MdsDatetimePickerResourcesService } from '../../services/mds-datetime-picker-resources.service';
import { TemplateTypeEnum } from "../../assests/Enums";
import { IDate, IRangeDate, IDay } from "../../assests/interfaces";
import { Mds } from 'mds.persian.datetime';
import PersianDateTime = Mds.PersianDateTime;
export declare class MdsDatetimePickerCoreComponent implements OnInit {
    private resourcesService;
    constructor(resourcesService: MdsDatetimePickerResourcesService);
    ngOnInit(): void;
    templateType: TemplateTypeEnum;
    initialValue: string;
    persianChar: boolean;
    isPersian: boolean;
    rangeSelector: boolean;
    timePicker: boolean;
    format: string;
    dateChanged: EventEmitter<IDate>;
    rangeDateChanged: EventEmitter<IRangeDate>;
    daysAnimationStateName: string;
    monthOrYearSelectorVisibilityStateName: string;
    monthSelectorVisibilityStateName: string;
    yearSelectorVisibilityStateName: string;
    private showMonthSelectorBlock;
    private showYearsSelectorBlock;
    mdsPersianDateTime: PersianDateTime;
    startMdsPersianDateTime: PersianDateTime;
    endMdsPersianDateTime: PersianDateTime;
    private startMdsPersianDateTimeToDateTemp;
    private endMdsPersianDateTimeToDateTemp;
    dateTime: Date;
    startDateTime: Date;
    endDateTime: Date;
    yearsToSelect: string[];
    daysInMonth: IDay[];
    weekDayNames: string[];
    resources: any;
    readonly selectedYear: number;
    readonly selectedYearString: string;
    readonly selectedMonth: number;
    readonly selectedMonthName: string;
    readonly selectedDay: number;
    readonly monthNames: string[];
    readonly weekdayNames: string[];
    readonly hour: string;
    readonly minute: string;
    readonly second: string;
    readonly isRejectButtonDisable: boolean;
    readonly isConfirmButtonDisable: boolean;
    private readonly persianStartDayOfMonth;
    private readonly gregorianStartDayOfMonth;
    private updateYearsListForToSelect();
    private getDayObject(year, month, day, disabled, holiday, isToday);
    private isRangeSelectorReady();
    private getDate();
    private updateMonthDays();
    private fireChangeEvent();
    private fireRangeChangeEvent();
    private getStartEndDate(dateString);
    private resetToFalseRangeParametersInMonthDays();
    hideSelecMonthAndYearBlock(): void;
    resetIncompleteRanges(): void;
    setDateTime(date: IDate): void;
    setDateTimeByString(dateTimeString: string): void;
    selectMonthButtonOnClick(): void;
    selectYearButtonOnClick(): void;
    monthsBlockVisibilityAnimationDone(e: any): void;
    yearsBlockVisibilityAnimationDone(e: any): void;
    nextYearButtonOnClick(): void;
    nextMonthButtonOnClick(): void;
    previousMonthButtonOnClick(): void;
    previousYearButtonOnClick(): void;
    hourUpButtonOnClick(): void;
    hourDownButtonOnClick(): void;
    minuteUpButtonOnClick(): void;
    minuteDownButtonOnClick(): void;
    secondUpButtonOnClick(): void;
    secondDownButtonOnClick(): void;
    monthOnClick(selectedMonthName: any): void;
    yearOnClick(selectedYear: any): void;
    todayButtonOnClick(): void;
    dayButtonOnClick(dayObject: IDay): void;
    dayButtonOnHover(dayObject: IDay): void;
    rejectButtonOnClick(): void;
    confirmButtonOnClick(): void;
}
