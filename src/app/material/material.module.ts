import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import {
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
} from '@angular/material';

export { ENTER, COMMA } from '@angular/cdk/keycodes';
export { ComponentType } from '@angular/cdk/portal';
export { MatChipInputEvent } from '@angular/material';
export {
        MatDialog,
        MatSnackBar,
        MatDialogRef,
        MatSnackBarRef,
        MAT_DIALOG_DATA,
        MAT_SNACK_BAR_DATA,
        MatPaginator,
        MatSort,
        MatTableDataSource,
        MatIconRegistry,
        MatDrawer,
        MatInput,
        MatAutocompleteSelectedEvent
} from '@angular/material';


/**
 * @name: MaterialModule
 * ====================
 * @description:
 * Module to export all material components in one module.
 * Replace BrowserAnimationsModule by NoopAnimationsModule to disable animations.
 */
@NgModule({
        exports: [
                BrowserAnimationsModule,
                CdkTableModule,
                MatAutocompleteModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatCheckboxModule,
                MatChipsModule,
                MatStepperModule,
                MatDatepickerModule,
                MatDialogModule,
                MatDividerModule,
                MatExpansionModule,
                MatGridListModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatNativeDateModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatRadioModule,
                MatRippleModule,
                MatSelectModule,
                MatSidenavModule,
                MatSliderModule,
                MatSlideToggleModule,
                MatSnackBarModule,
                MatSortModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                FlexLayoutModule
        ]
})
export class MaterialModule { }
