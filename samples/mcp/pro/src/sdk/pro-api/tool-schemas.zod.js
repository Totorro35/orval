"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientOrderByIdResponse = exports.getClientOrderByIdResponseItemsItemPageDefault = exports.getClientOrderByIdResponseItemsItemPerPageMax = exports.getClientOrderByIdResponseItemsItemPerPageDefault = exports.getClientOrderByIdParams = exports.createClientOrderBody = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemNineTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemNameMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSevenTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSixItemsDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSixTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormNameMin = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFourTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemThreeTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemTwoItemsDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemTwoTypeDefault = exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemOneTypeDefault = exports.getAllClientOrdersResponse = exports.getAllClientOrdersQueryParams = exports.getAllClientOrdersQueryPageDefault = exports.getAllClientOrdersQueryPerPageMax = exports.getAllClientOrdersQueryPerPageDefault = void 0;
exports.getArticlesQueryPerPageDefault = exports.getDeliverablesResponse = exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPageDefault = exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageMax = exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageDefault = exports.getDeliverablesQueryParams = exports.getDeliverablesQueryPageDefault = exports.getDeliverablesQueryPerPageMax = exports.getDeliverablesQueryPerPageDefault = exports.rateForClientOrderItemResponse = exports.rateForClientOrderItemBody = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemNineTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemNameMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSevenTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSixItemsDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSixTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormNameMin = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFourTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemThreeTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemTwoItemsDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemTwoTypeDefault = exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemOneTypeDefault = void 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigDefaultNameMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormNameMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemPositionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemMessageMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemPositionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemMessageMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialTitleMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureConfigAlertsDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureNameMin = exports.getArticleByIdResponseFlowOneJsonOneEquipmentsDefault = exports.getArticleByIdResponseFlowOneJsonOneEquipmentsItemMin = exports.getArticleByIdResponseFlowOneJsonOneTasksDefault = exports.getArticleByIdResponseFlowOneJsonOneTasksItemMin = exports.getArticleByIdParams = exports.getArticlesResponse = exports.getArticlesQueryParams = exports.getArticlesQueryPageDefault = exports.getArticlesQueryPerPageMax = void 0;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingEnhanceContrastDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansAddSurfaceInfoDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOtherDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCommonAreaDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOutdoorDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCirculationDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesAncillaryRoomDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesTechnicalRoomDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesStorageRoomDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesWaterRoomDefault = exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesLivingRoomDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemNameMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigSecondButtonLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigFirstButtonLabelMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigMinValueMin = exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipDescriptionMin = void 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormNameMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemPositionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemMessageMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemPositionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemMessageMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureConfigAlertsDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureNameMin = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinLevelDisplayOrderDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinExcludedRoomsDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinRoomDisplayOrderDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMeshDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationVisibilityDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMinimapDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingMaskWindowsDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWhiteBalanceDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingDenoiseImageDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingTripodRemovalMethodDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMax = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMin = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMax = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMin = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetADefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingIconWidthDefault = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMax = exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMin = void 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneSaveKeysDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneIgnoreKeysDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemNameMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigSecondButtonLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigFirstButtonLabelMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigMinValueMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateTitleMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigDefaultNameMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin = exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin = void 0;
exports.getArticleByIdResponse = void 0;
/**
 * Generated by orval v8.0.0-rc.2 🍺
 * Do not edit manually.
 * Pro API
 * The Pro API
 * OpenAPI spec version: 1.1
 */
const zod_1 = require("zod");
exports.getAllClientOrdersQueryPerPageDefault = 30;
exports.getAllClientOrdersQueryPerPageMax = 100;
exports.getAllClientOrdersQueryPageDefault = 1;
exports.getAllClientOrdersQueryParams = zod_1.z.object({
    perPage: zod_1.z
        .number()
        .min(1)
        .max(exports.getAllClientOrdersQueryPerPageMax)
        .default(exports.getAllClientOrdersQueryPerPageDefault),
    page: zod_1.z.number().min(1).default(exports.getAllClientOrdersQueryPageDefault),
    sortBy: zod_1.z.string().optional(),
    status: zod_1.z.enum(['PENDING', 'CANCELED', 'COMPLETED', 'DONE']).optional(),
    orderNumber: zod_1.z.string().optional(),
    clientAccountNumber: zod_1.z.string().optional(),
    createdAfter: zod_1.z.string().datetime({}).optional(),
    createdBefore: zod_1.z.string().datetime({}).optional(),
});
exports.getAllClientOrdersResponse = zod_1.z
    .object({
    pagination: zod_1.z.object({
        page: zod_1.z.number().min(1),
        perPage: zod_1.z.number().min(1),
        totalCount: zod_1.z.number().min(1),
        pageCount: zod_1.z.number().min(1),
        hasPreviousPage: zod_1.z.boolean(),
        hasNextPage: zod_1.z.boolean(),
    }),
})
    .and(zod_1.z.object({
    data: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string().uuid(),
        orderNumber: zod_1.z.string(),
        clientName: zod_1.z.string().describe('Client name'),
        createdAt: zod_1.z.string().datetime({}),
        articlesNames: zod_1.z.array(zod_1.z.string()),
        status: zod_1.z.enum(['PENDING', 'CANCELED', 'COMPLETED', 'DONE']),
        expectedDeliverableQuantity: zod_1.z.number(),
    }))
        .optional(),
}));
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemOneTypeDefault = 'EXPORTED_CAPTURE_PANORAMA_V2';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemTwoTypeDefault = 'EXPORTED_CAPTURE_PANORAMA';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemTwoItemsDefault = [];
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemThreeTypeDefault = 'EXPORTED_CAPTURE';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFourTypeDefault = 'EXPORTED_EXTRACT_ROOMPLAN';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveTypeDefault = 'EXPORTED_FORM';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormNameMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin = 0;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault = false;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueDefault = [];
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSixTypeDefault = 'EXPORTED_LIST';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSixItemsDefault = [];
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemSevenTypeDefault = 'EXPORTED_REPORT';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightTypeDefault = 'EXPORTED_ANNOTATION_PANORAMA';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemNameMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin = 0;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault = false;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin = 2;
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueDefault = [];
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsDefault = [];
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemNineTypeDefault = 'EXPORTED_SWITCH';
exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin = 0;
exports.createClientOrderBody = zod_1.z.object({
    items: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().uuid().optional(),
        article: zod_1.z.string().uuid(),
        reference: zod_1.z.string(),
        dueDate: zod_1.z.string().date().optional(),
        rateSimulationWorkflowId: zod_1.z.string(),
        orderResult: zod_1.z.object({
            version: zod_1.z.string(),
            exportedComponents: zod_1.z.array(zod_1.z.union([
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_CAPTURE_PANORAMA_V2']),
                    camera: zod_1.z.object({
                        model: zod_1.z.string(),
                        serialNumber: zod_1.z.string(),
                    }),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_CAPTURE_PANORAMA']),
                    camera: zod_1.z.object({
                        model: zod_1.z.string(),
                        serialNumber: zod_1.z.string(),
                    }),
                    items: zod_1.z.array(zod_1.z.object({
                        id: zod_1.z.string().uuid(),
                    })),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_CAPTURE']),
                    device: zod_1.z.enum(['ANDROID', 'IOS']),
                    category: zod_1.z.enum(['CAR', 'HOUSING', 'FREE', 'ROOM', 'OTHER']),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_EXTRACT_ROOMPLAN']),
                    itemType: zod_1.z.enum(['SURFACE', 'ROOM']),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_FORM']),
                    form: zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormNameMin),
                        fieldValues: zod_1.z.array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin),
                            field: zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }),
                            value: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin)),
                            enabled: zod_1.z.boolean().optional(),
                        })),
                        enabled: zod_1.z.boolean().optional(),
                    }),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_LIST']),
                    items: zod_1.z.array(zod_1.z.object({
                        id: zod_1.z.string().uuid(),
                        exportedComponents: zod_1.z.unknown(),
                    })),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_REPORT']),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_ANNOTATION_PANORAMA']),
                    forms: zod_1.z.array(zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemNameMin),
                        fieldValues: zod_1.z.array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin),
                            field: zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }),
                            value: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin)),
                            enabled: zod_1.z.boolean().optional(),
                        })),
                        enabled: zod_1.z.boolean().optional(),
                    })),
                    panoramaId: zod_1.z.string().uuid(),
                    position: zod_1.z.object({
                        phi: zod_1.z.number(),
                        theta: zod_1.z.number(),
                    }),
                }),
                zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    type: zod_1.z.enum(['EXPORTED_SWITCH']),
                    case: zod_1.z.object({
                        conditions: zod_1.z.array(zod_1.z.object({
                            operator: zod_1.z.enum([
                                'EQUALS',
                                'NOT_EQUALS',
                                'CONTAINS',
                                'NOT_CONTAINS',
                                'GREATER_THAN',
                                'LESS_THAN',
                                'GREATER_THAN_OR_EQUAL',
                                'LESS_THAN_OR_EQUAL',
                                'REGEX_MATCH',
                            ]),
                            value: zod_1.z.string().min(1),
                            label: zod_1.z.string().min(1),
                            index: zod_1.z
                                .number()
                                .min(exports.createClientOrderBodyItemsItemOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin),
                        })),
                        flow: zod_1.z
                            .object({
                            exportedComponents: zod_1.z.unknown(),
                        })
                            .optional(),
                    }),
                }),
            ])),
        }),
    })),
});
exports.getClientOrderByIdParams = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
exports.getClientOrderByIdResponseItemsItemPerPageDefault = 30;
exports.getClientOrderByIdResponseItemsItemPerPageMax = 100;
exports.getClientOrderByIdResponseItemsItemPageDefault = 1;
exports.getClientOrderByIdResponse = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    orderNumber: zod_1.z.string(),
    items: zod_1.z.array(zod_1.z.object({
        perPage: zod_1.z
            .number()
            .min(1)
            .max(exports.getClientOrderByIdResponseItemsItemPerPageMax)
            .default(exports.getClientOrderByIdResponseItemsItemPerPageDefault),
        page: zod_1.z
            .number()
            .min(1)
            .default(exports.getClientOrderByIdResponseItemsItemPageDefault),
        sortBy: zod_1.z.string().optional(),
        id: zod_1.z.string().uuid(),
        itemNumber: zod_1.z.string(),
        clientName: zod_1.z.string(),
        clientId: zod_1.z.string().uuid(),
        articleName: zod_1.z.string(),
        price: zod_1.z.number(),
        vat: zod_1.z.number(),
        requiredDeliverableTypes: zod_1.z.array(zod_1.z.string()),
        asset: zod_1.z.object({
            id: zod_1.z.string().uuid(),
            name: zod_1.z.string(),
            type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
            address: zod_1.z
                .object({
                id: zod_1.z.string().uuid(),
                name: zod_1.z.string(),
                address1: zod_1.z.string(),
                address2: zod_1.z.string().optional(),
                city: zod_1.z.string(),
                postCode: zod_1.z.string(),
                country: zod_1.z.string(),
                phone: zod_1.z.string().optional(),
                unitNumber: zod_1.z.string().optional(),
                floor: zod_1.z.number().optional(),
            })
                .optional(),
            access: zod_1.z
                .object({
                id: zod_1.z.string().uuid(),
                address: zod_1.z
                    .object({
                    id: zod_1.z.string().uuid(),
                    name: zod_1.z.string(),
                    address1: zod_1.z.string(),
                    address2: zod_1.z.string().optional(),
                    city: zod_1.z.string(),
                    postCode: zod_1.z.string(),
                    country: zod_1.z.string(),
                    phone: zod_1.z.string().optional(),
                    unitNumber: zod_1.z.string().optional(),
                    floor: zod_1.z.number().optional(),
                })
                    .optional(),
                remote: zod_1.z.boolean(),
                description: zod_1.z.string().optional(),
            })
                .optional(),
            tags: zod_1.z
                .array(zod_1.z.object({
                id: zod_1.z.string().uuid(),
                name: zod_1.z.string(),
                slug: zod_1.z.string(),
                type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
            }))
                .optional(),
            externalInformation: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
        }),
        orderDate: zod_1.z.string().datetime({}),
        dueDate: zod_1.z.string().date().optional(),
        legacyForm: zod_1.z.string().optional(),
        operationalStatus: zod_1.z.enum([
            'CREATING',
            'PENDING',
            'ASSIGNED',
            'SCHEDULED',
            'COMPLETED',
            'AMENDED',
            'CANCELED',
        ]),
        invoicingStatus: zod_1.z.enum([
            'PENDING',
            'BILLABLE',
            'BILLED',
            'PAID',
            'NOT_BILLABLE',
        ]),
    })),
    orderDate: zod_1.z.string().datetime({}),
    status: zod_1.z.enum(['PENDING', 'CANCELED', 'COMPLETED', 'DONE']),
    totalAmount: zod_1.z.number(),
});
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemOneTypeDefault = 'EXPORTED_CAPTURE_PANORAMA_V2';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemTwoTypeDefault = 'EXPORTED_CAPTURE_PANORAMA';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemTwoItemsDefault = [];
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemThreeTypeDefault = 'EXPORTED_CAPTURE';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFourTypeDefault = 'EXPORTED_EXTRACT_ROOMPLAN';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveTypeDefault = 'EXPORTED_FORM';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormNameMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin = 0;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault = false;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueDefault = [];
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSixTypeDefault = 'EXPORTED_LIST';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSixItemsDefault = [];
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemSevenTypeDefault = 'EXPORTED_REPORT';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightTypeDefault = 'EXPORTED_ANNOTATION_PANORAMA';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemNameMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin = 0;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault = false;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin = 2;
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueDefault = [];
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsDefault = [];
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemNineTypeDefault = 'EXPORTED_SWITCH';
exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin = 0;
exports.rateForClientOrderItemBody = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    article: zod_1.z.string().uuid(),
    orderResult: zod_1.z.object({
        version: zod_1.z.string(),
        exportedComponents: zod_1.z.array(zod_1.z.union([
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_CAPTURE_PANORAMA_V2']),
                camera: zod_1.z.object({
                    model: zod_1.z.string(),
                    serialNumber: zod_1.z.string(),
                }),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_CAPTURE_PANORAMA']),
                camera: zod_1.z.object({
                    model: zod_1.z.string(),
                    serialNumber: zod_1.z.string(),
                }),
                items: zod_1.z.array(zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                })),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_CAPTURE']),
                device: zod_1.z.enum(['ANDROID', 'IOS']),
                category: zod_1.z.enum(['CAR', 'HOUSING', 'FREE', 'ROOM', 'OTHER']),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_EXTRACT_ROOMPLAN']),
                itemType: zod_1.z.enum(['SURFACE', 'ROOM']),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_FORM']),
                form: zod_1.z.object({
                    name: zod_1.z
                        .string()
                        .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormNameMin),
                    fieldValues: zod_1.z.array(zod_1.z.object({
                        type: zod_1.z.enum([
                            'TEXT',
                            'SELECT',
                            'RADIO',
                            'CHECKBOX',
                            'FILE',
                            'EMAIL',
                            'PHONE',
                            'DATE',
                            'TIME',
                            'TEXTAREA',
                            'URL',
                            'NUMBER',
                            'DIVIDER',
                            'RGBD',
                            'SIGNATURE',
                        ]),
                        label: zod_1.z
                            .string()
                            .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemLabelMin),
                        field: zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemFieldConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }),
                        value: zod_1.z.array(zod_1.z
                            .string()
                            .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemFiveFormFieldValuesItemValueItemMin)),
                        enabled: zod_1.z.boolean().optional(),
                    })),
                    enabled: zod_1.z.boolean().optional(),
                }),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_LIST']),
                items: zod_1.z.array(zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    exportedComponents: zod_1.z.unknown(),
                })),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_REPORT']),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_ANNOTATION_PANORAMA']),
                forms: zod_1.z.array(zod_1.z.object({
                    name: zod_1.z
                        .string()
                        .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemNameMin),
                    fieldValues: zod_1.z.array(zod_1.z.object({
                        type: zod_1.z.enum([
                            'TEXT',
                            'SELECT',
                            'RADIO',
                            'CHECKBOX',
                            'FILE',
                            'EMAIL',
                            'PHONE',
                            'DATE',
                            'TIME',
                            'TEXTAREA',
                            'URL',
                            'NUMBER',
                            'DIVIDER',
                            'RGBD',
                            'SIGNATURE',
                        ]),
                        label: zod_1.z
                            .string()
                            .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemLabelMin),
                        field: zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemFieldConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }),
                        value: zod_1.z.array(zod_1.z
                            .string()
                            .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemEightFormsItemFieldValuesItemValueItemMin)),
                        enabled: zod_1.z.boolean().optional(),
                    })),
                    enabled: zod_1.z.boolean().optional(),
                })),
                panoramaId: zod_1.z.string().uuid(),
                position: zod_1.z.object({
                    phi: zod_1.z.number(),
                    theta: zod_1.z.number(),
                }),
            }),
            zod_1.z.object({
                id: zod_1.z.string().uuid(),
                type: zod_1.z.enum(['EXPORTED_SWITCH']),
                case: zod_1.z.object({
                    conditions: zod_1.z.array(zod_1.z.object({
                        operator: zod_1.z.enum([
                            'EQUALS',
                            'NOT_EQUALS',
                            'CONTAINS',
                            'NOT_CONTAINS',
                            'GREATER_THAN',
                            'LESS_THAN',
                            'GREATER_THAN_OR_EQUAL',
                            'LESS_THAN_OR_EQUAL',
                            'REGEX_MATCH',
                        ]),
                        value: zod_1.z.string().min(1),
                        label: zod_1.z.string().min(1),
                        index: zod_1.z
                            .number()
                            .min(exports.rateForClientOrderItemBodyOrderResultOneExportedComponentsItemNineCaseConditionsItemIndexMin),
                    })),
                    flow: zod_1.z
                        .object({
                        exportedComponents: zod_1.z.unknown(),
                    })
                        .optional(),
                }),
            }),
        ])),
    }),
});
exports.rateForClientOrderItemResponse = zod_1.z.object({
    price: zod_1.z.number(),
    vat: zod_1.z.number(),
});
exports.getDeliverablesQueryPerPageDefault = 30;
exports.getDeliverablesQueryPerPageMax = 100;
exports.getDeliverablesQueryPageDefault = 1;
exports.getDeliverablesQueryParams = zod_1.z.object({
    perPage: zod_1.z
        .number()
        .min(1)
        .max(exports.getDeliverablesQueryPerPageMax)
        .default(exports.getDeliverablesQueryPerPageDefault),
    page: zod_1.z.number().min(1).default(exports.getDeliverablesQueryPageDefault),
    sortBy: zod_1.z.string().optional(),
    clientOrderId: zod_1.z.string().optional(),
    clientOrderItemId: zod_1.z.string().optional(),
});
exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageDefault = 30;
exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageMax = 100;
exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPageDefault = 1;
exports.getDeliverablesResponse = zod_1.z
    .object({
    pagination: zod_1.z.object({
        page: zod_1.z.number().min(1),
        perPage: zod_1.z.number().min(1),
        totalCount: zod_1.z.number().min(1),
        pageCount: zod_1.z.number().min(1),
        hasPreviousPage: zod_1.z.boolean(),
        hasNextPage: zod_1.z.boolean(),
    }),
})
    .and(zod_1.z.object({
    data: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string().uuid(),
        path: zod_1.z.string(),
        provider: zod_1.z.enum(['GCP', 'AWS', 'SCALEWAY', 'OODRIVE']),
        type: zod_1.z.enum([
            'SHOWROOM',
            'ROOMPLANS',
            'VIRTUAL_TOUR',
            'GAUSSIAN_SPLATTING',
            'FLYTHROUGH',
            'REPORT',
            'COSTING',
            'LINK',
            'ENERGY_PERFORMANCE_DIAGNOSTICS',
        ]),
        status: zod_1.z.enum([
            'ERROR',
            'PENDING',
            'PROCESSING',
            'PROCESSED',
            'POST_PROCESSED',
            'VALIDATED',
            'PUBLISHED',
            'CANCELED',
            'REJECTED',
        ]),
        clientOrderItem: zod_1.z
            .object({
            id: zod_1.z.string().uuid(),
            itemNumber: zod_1.z.string(),
            article: zod_1.z.object({
                id: zod_1.z.string().uuid(),
                name: zod_1.z.string().describe('The name of the article'),
                description: zod_1.z
                    .string()
                    .optional()
                    .describe('The description of the article'),
                status: zod_1.z.enum(['ACTIVE', 'INACTIVE']),
                type: zod_1.z.enum(['PRODUCT', 'SERVICE', 'FEE']),
                flow: zod_1.z
                    .string()
                    .uuid()
                    .describe('Associated Acquisition Flow'),
                pipeline: zod_1.z
                    .string()
                    .uuid()
                    .optional()
                    .describe('Associated processing pipeline'),
                orderingConfig: zod_1.z
                    .string()
                    .uuid()
                    .describe('Associated order configuration'),
                requiredDeliverableTypes: zod_1.z
                    .array(zod_1.z.enum([
                    'SHOWROOM',
                    'ROOMPLANS',
                    'VIRTUAL_TOUR',
                    'GAUSSIAN_SPLATTING',
                    'FLYTHROUGH',
                    'REPORT',
                    'COSTING',
                    'LINK',
                    'ENERGY_PERFORMANCE_DIAGNOSTICS',
                ]))
                    .optional(),
                pricingInformations: zod_1.z
                    .object({
                    skuTemplate: zod_1.z
                        .string()
                        .describe('The SKU template used for pricing'),
                    surfaceRanges: zod_1.z
                        .array(zod_1.z.object({
                        skuValue: zod_1.z
                            .string()
                            .describe('The value to replace the placeholder with'),
                        min: zod_1.z
                            .number()
                            .describe('The min value of the range'),
                        max: zod_1.z
                            .number()
                            .describe('The max value of the range'),
                    }))
                        .optional()
                        .describe('The name of the article'),
                })
                    .optional(),
            }),
            asset: zod_1.z.object({
                id: zod_1.z.string().uuid(),
                name: zod_1.z.string(),
                type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
                address: zod_1.z
                    .object({
                    id: zod_1.z.string().uuid(),
                    name: zod_1.z.string(),
                    address1: zod_1.z.string(),
                    address2: zod_1.z.string().optional(),
                    city: zod_1.z.string(),
                    postCode: zod_1.z.string(),
                    country: zod_1.z.string(),
                    phone: zod_1.z.string().optional(),
                    unitNumber: zod_1.z.string().optional(),
                    floor: zod_1.z.number().optional(),
                })
                    .optional(),
                access: zod_1.z
                    .object({
                    id: zod_1.z.string().uuid(),
                    address: zod_1.z
                        .object({
                        id: zod_1.z.string().uuid(),
                        name: zod_1.z.string(),
                        address1: zod_1.z.string(),
                        address2: zod_1.z.string().optional(),
                        city: zod_1.z.string(),
                        postCode: zod_1.z.string(),
                        country: zod_1.z.string(),
                        phone: zod_1.z.string().optional(),
                        unitNumber: zod_1.z.string().optional(),
                        floor: zod_1.z.number().optional(),
                    })
                        .optional(),
                    remote: zod_1.z.boolean(),
                    description: zod_1.z.string().optional(),
                })
                    .optional(),
                tags: zod_1.z
                    .array(zod_1.z.object({
                    id: zod_1.z.string().uuid(),
                    name: zod_1.z.string(),
                    slug: zod_1.z.string(),
                    type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
                }))
                    .optional(),
                externalInformation: zod_1.z
                    .record(zod_1.z.string(), zod_1.z.string())
                    .optional(),
            }),
            dueDate: zod_1.z.string().date().optional(),
            price: zod_1.z.number(),
            vat: zod_1.z.number(),
            clientOrder: zod_1.z.object({
                id: zod_1.z.string().uuid(),
                orderNumber: zod_1.z.string(),
                items: zod_1.z.array(zod_1.z.object({
                    perPage: zod_1.z
                        .number()
                        .min(1)
                        .max(exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageMax)
                        .default(exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPerPageDefault),
                    page: zod_1.z
                        .number()
                        .min(1)
                        .default(exports.getDeliverablesResponseTwoDataItemClientOrderItemClientOrderItemsItemPageDefault),
                    sortBy: zod_1.z.string().optional(),
                    id: zod_1.z.string().uuid(),
                    itemNumber: zod_1.z.string(),
                    clientName: zod_1.z.string(),
                    clientId: zod_1.z.string().uuid(),
                    articleName: zod_1.z.string(),
                    price: zod_1.z.number(),
                    vat: zod_1.z.number(),
                    requiredDeliverableTypes: zod_1.z.array(zod_1.z.string()),
                    asset: zod_1.z.object({
                        id: zod_1.z.string().uuid(),
                        name: zod_1.z.string(),
                        type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
                        address: zod_1.z
                            .object({
                            id: zod_1.z.string().uuid(),
                            name: zod_1.z.string(),
                            address1: zod_1.z.string(),
                            address2: zod_1.z.string().optional(),
                            city: zod_1.z.string(),
                            postCode: zod_1.z.string(),
                            country: zod_1.z.string(),
                            phone: zod_1.z.string().optional(),
                            unitNumber: zod_1.z.string().optional(),
                            floor: zod_1.z.number().optional(),
                        })
                            .optional(),
                        access: zod_1.z
                            .object({
                            id: zod_1.z.string().uuid(),
                            address: zod_1.z
                                .object({
                                id: zod_1.z.string().uuid(),
                                name: zod_1.z.string(),
                                address1: zod_1.z.string(),
                                address2: zod_1.z.string().optional(),
                                city: zod_1.z.string(),
                                postCode: zod_1.z.string(),
                                country: zod_1.z.string(),
                                phone: zod_1.z.string().optional(),
                                unitNumber: zod_1.z.string().optional(),
                                floor: zod_1.z.number().optional(),
                            })
                                .optional(),
                            remote: zod_1.z.boolean(),
                            description: zod_1.z.string().optional(),
                        })
                            .optional(),
                        tags: zod_1.z
                            .array(zod_1.z.object({
                            id: zod_1.z.string().uuid(),
                            name: zod_1.z.string(),
                            slug: zod_1.z.string(),
                            type: zod_1.z.enum(['REAL_ESTATE', 'CAR']),
                        }))
                            .optional(),
                        externalInformation: zod_1.z
                            .record(zod_1.z.string(), zod_1.z.string())
                            .optional(),
                    }),
                    orderDate: zod_1.z.string().datetime({}),
                    dueDate: zod_1.z.string().date().optional(),
                    legacyForm: zod_1.z.string().optional(),
                    operationalStatus: zod_1.z.enum([
                        'CREATING',
                        'PENDING',
                        'ASSIGNED',
                        'SCHEDULED',
                        'COMPLETED',
                        'AMENDED',
                        'CANCELED',
                    ]),
                    invoicingStatus: zod_1.z.enum([
                        'PENDING',
                        'BILLABLE',
                        'BILLED',
                        'PAID',
                        'NOT_BILLABLE',
                    ]),
                })),
                orderDate: zod_1.z.string().datetime({}),
                status: zod_1.z.enum([
                    'PENDING',
                    'CANCELED',
                    'COMPLETED',
                    'DONE',
                ]),
                totalAmount: zod_1.z.number(),
            }),
            operationalStatus: zod_1.z.enum([
                'CREATING',
                'PENDING',
                'ASSIGNED',
                'SCHEDULED',
                'COMPLETED',
                'AMENDED',
                'CANCELED',
            ]),
            invoicingStatus: zod_1.z.enum([
                'PENDING',
                'BILLABLE',
                'BILLED',
                'PAID',
                'NOT_BILLABLE',
            ]),
            legacyForm: zod_1.z.string().optional(),
            fromODS: zod_1.z.boolean().optional(),
            createdAt: zod_1.z.string().datetime({}),
            updatedAt: zod_1.z.string().datetime({}),
        })
            .optional(),
    }))
        .optional(),
}));
exports.getArticlesQueryPerPageDefault = 30;
exports.getArticlesQueryPerPageMax = 100;
exports.getArticlesQueryPageDefault = 1;
exports.getArticlesQueryParams = zod_1.z.object({
    perPage: zod_1.z
        .number()
        .min(1)
        .max(exports.getArticlesQueryPerPageMax)
        .default(exports.getArticlesQueryPerPageDefault),
    page: zod_1.z.number().min(1).default(exports.getArticlesQueryPageDefault),
    sortBy: zod_1.z.string().optional(),
    type: zod_1.z.array(zod_1.z.enum(['PRODUCT', 'SERVICE', 'FEE'])).optional(),
    status: zod_1.z.array(zod_1.z.enum(['ACTIVE', 'INACTIVE'])).optional(),
    name: zod_1.z.string().optional(),
});
exports.getArticlesResponse = zod_1.z
    .object({
    pagination: zod_1.z.object({
        page: zod_1.z.number().min(1),
        perPage: zod_1.z.number().min(1),
        totalCount: zod_1.z.number().min(1),
        pageCount: zod_1.z.number().min(1),
        hasPreviousPage: zod_1.z.boolean(),
        hasNextPage: zod_1.z.boolean(),
    }),
})
    .and(zod_1.z.object({
    data: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string().describe('The name of the article'),
        description: zod_1.z
            .string()
            .optional()
            .describe('The description of the article'),
        status: zod_1.z.enum(['ACTIVE', 'INACTIVE']),
        type: zod_1.z.enum(['PRODUCT', 'SERVICE', 'FEE']),
        flow: zod_1.z.string().uuid().describe('Associated Acquisition Flow'),
        pipeline: zod_1.z
            .string()
            .uuid()
            .optional()
            .describe('Associated processing pipeline'),
        orderingConfig: zod_1.z
            .string()
            .uuid()
            .describe('Associated order configuration'),
        requiredDeliverableTypes: zod_1.z
            .array(zod_1.z.enum([
            'SHOWROOM',
            'ROOMPLANS',
            'VIRTUAL_TOUR',
            'GAUSSIAN_SPLATTING',
            'FLYTHROUGH',
            'REPORT',
            'COSTING',
            'LINK',
            'ENERGY_PERFORMANCE_DIAGNOSTICS',
        ]))
            .optional(),
        pricingInformations: zod_1.z
            .object({
            skuTemplate: zod_1.z
                .string()
                .describe('The SKU template used for pricing'),
            surfaceRanges: zod_1.z
                .array(zod_1.z.object({
                skuValue: zod_1.z
                    .string()
                    .describe('The value to replace the placeholder with'),
                min: zod_1.z.number().describe('The min value of the range'),
                max: zod_1.z.number().describe('The max value of the range'),
            }))
                .optional()
                .describe('The name of the article'),
        })
            .optional(),
    }))
        .optional(),
}));
exports.getArticleByIdParams = zod_1.z.object({
    id: zod_1.z.string(),
});
exports.getArticleByIdResponseFlowOneJsonOneTasksItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneTasksDefault = [];
exports.getArticleByIdResponseFlowOneJsonOneEquipmentsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneEquipmentsDefault = [];
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureConfigAlertsDefault = [];
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormDescriptionMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigDefaultNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipTitleMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipDescriptionMin = 5;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigMinValueMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigFirstButtonLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigSecondButtonLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemNameMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin = 0;
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesLivingRoomDefault = ['Salon / Séjour', 'Salle à manger', 'Bureau', 'Chambre', 'Pièce à vivre'];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesWaterRoomDefault = [
    'Salle de bain',
    'Salle d"eau',
    'WC',
    'Buanderie',
    'Dressing',
    'Cuisine',
    'Laverie',
];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesStorageRoomDefault = [
    'Dressing',
    'Placard',
    'Bibliothèque',
    'Réserve',
    'Cellier',
    'Débarras',
    'Garde-manger',
];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesTechnicalRoomDefault = [
    'Local technique',
    'Chaufferie',
    'Local compteur / électrique',
    'Stockage technique',
];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesAncillaryRoomDefault = ['Garage', 'Cave', 'Grenier', 'Atelier', 'Combles'];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCirculationDefault = ['Couloir', 'Dégagement', 'Palier', 'Entrée / Hall'];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOutdoorDefault = [
    'Abri de jardin',
    'Allée / Chemin d’accès',
    'Autre',
    'Balcon',
    'Cour',
    'Façade arrière',
    'Façade avant',
    'Garage / Abri voiture',
    'Jardin',
    'Patio',
    'Pignon droit',
    'Pignon gauche',
    'Piscine',
    'Terrasse',
];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCommonAreaDefault = [
    'Hall d’immeuble',
    'Cage d’escalier',
    'Couloir commun',
    'Local poubelle',
    'Local vélo',
];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOtherDefault = ['Autre pièce', 'Salle de jeux', 'Salle de sport'];
exports.getArticleByIdResponsePipelineOneJsonOneRoomplansAddSurfaceInfoDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingEnhanceContrastDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodDefault = [256, 2048];
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMin = 2;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMax = 2;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingIconWidthDefault = 500;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetADefault = 129;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMin = 0;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMax = 255;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBDefault = 131;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMin = 0;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMax = 255;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingTripodRemovalMethodDefault = 'AUTO';
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingDenoiseImageDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWhiteBalanceDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingMaskWindowsDefault = false;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMinimapDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationVisibilityDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMeshDefault = true;
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinRoomDisplayOrderDefault = [];
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinExcludedRoomsDefault = [];
exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinLevelDisplayOrderDefault = [];
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureConfigAlertsDefault = [];
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormDescriptionMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigDefaultNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipTitleMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipDescriptionMin = 5;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigMinValueMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigFirstButtonLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigSecondButtonLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemNameMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin = 2;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp = new RegExp('^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9.\\-+_]{1,100}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp = new RegExp('^text\\/[a-zA-Z0-9.\\-+]{1,100};\\s?charset=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp = new RegExp('^multipart\\/[a-zA-Z0-9.\\-+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9.\\-+\\s]{0,70}\"|[a-zA-Z0-9.\\-+]{0,70})(\\s?\\([a-zA-Z0-9.\\-+\\s]{1,20}\\))?){0,2}$');
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault = false;
exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin = 0;
exports.getArticleByIdResponseOrderingConfigOneJsonOneIgnoreKeysDefault = [];
exports.getArticleByIdResponseOrderingConfigOneJsonOneSaveKeysDefault = [];
exports.getArticleByIdResponse = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().describe('The name of the article'),
    description: zod_1.z
        .string()
        .optional()
        .describe('The description of the article'),
    status: zod_1.z.enum(['ACTIVE', 'INACTIVE']),
    type: zod_1.z.enum(['PRODUCT', 'SERVICE', 'FEE']),
    flow: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().optional(),
        json: zod_1.z.object({
            missionDetails: zod_1.z
                .object({
                title: zod_1.z.string(),
                accentLabel: zod_1.z.string().optional(),
                details: zod_1.z.string(),
                proposal: zod_1.z.string().optional(),
                card: zod_1.z.object({
                    dateLine: zod_1.z.string().datetime({}),
                    subtitle: zod_1.z.string().optional(),
                    detailLine: zod_1.z.string().optional(),
                }),
            })
                .optional(),
            tasks: zod_1.z
                .array(zod_1.z.string().min(exports.getArticleByIdResponseFlowOneJsonOneTasksItemMin))
                .default(exports.getArticleByIdResponseFlowOneJsonOneTasksDefault),
            equipments: zod_1.z
                .array(zod_1.z
                .string()
                .min(exports.getArticleByIdResponseFlowOneJsonOneEquipmentsItemMin))
                .default(exports.getArticleByIdResponseFlowOneJsonOneEquipmentsDefault),
            components: zod_1.z.array(zod_1.z.union([
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE']),
                    capture: zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureNameMin),
                        type: zod_1.z.enum(['CAR', 'ROOM', 'HOUSING', 'OTHER', 'FREE']),
                        config: zod_1.z.object({
                            type: zod_1.z.enum(['CAR', 'ROOM', 'HOUSING', 'OTHER', 'FREE']),
                            alerts: zod_1.z
                                .array(zod_1.z.enum(['SPEED', 'LIGHT', 'ORIENTATION', 'STRAIGHT']))
                                .default(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneCaptureConfigAlertsDefault),
                            orientation: zod_1.z.enum(['PORTRAIT', 'LANDSCAPE']),
                            focusMode: zod_1.z.enum(['AUTO']),
                            viewFinder: zod_1.z.boolean(),
                            stopWatch: zod_1.z.boolean(),
                            captureLimit: zod_1.z.number().optional(),
                            roomPlan: zod_1.z.boolean(),
                            displayProgressBar: zod_1.z.boolean(),
                            validationThreshold: zod_1.z.number().optional(),
                            maxValue: zod_1.z.number().optional(),
                            params: zod_1.z.object({
                                recommendedCodec: zod_1.z.enum(['H265']),
                                bitRate: zod_1.z.number(),
                                iFrameInterval: zod_1.z.number(),
                                targetFrameRate: zod_1.z.number(),
                            }),
                        }),
                    }),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    startInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                    endInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE_PANORAMA']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    startInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                    endInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE_PANORAMA_V2']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    multibracket: zod_1.z
                        .enum(['NO_BRACKET', 'BRACKET_3', 'BRACKET_5', 'BRACKET_7'])
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CONNECTION']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFourTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['DECONNECTION']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['EXPORT']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['EXTRACT_ROOMPLAN']),
                    itemType: zod_1.z.enum(['SURFACE', 'ROOM']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['FORM']),
                    form: zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormNameMin),
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormDescriptionMin)
                            .optional(),
                        fields: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }))
                            .min(1),
                        enabled: zod_1.z.boolean().optional(),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['LIST']),
                    flow: zod_1.z.object({
                        components: zod_1.z.unknown(),
                    }),
                    config: zod_1.z.object({
                        editable: zod_1.z.boolean(),
                        defaultName: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigDefaultNameMin),
                        displayMode: zod_1.z.enum(['THUMBNAIL', 'LIST', 'LIST_THUMBNAILS']),
                        emptyState: zod_1.z.object({
                            title: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateTitleMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin)
                                .optional(),
                            iconUrl: zod_1.z.string().optional(),
                        }),
                        tooltip: zod_1.z
                            .object({
                            title: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipTitleMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigTooltipDescriptionMin)
                                .optional(),
                            iconUrl: zod_1.z.string().optional(),
                        })
                            .optional(),
                        minValue: zod_1.z
                            .number()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigMinValueMin)
                            .optional(),
                        maxValue: zod_1.z.number().min(1).optional(),
                        firstButtonLabel: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigFirstButtonLabelMin)
                            .optional(),
                        secondButtonLabel: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemNineConfigSecondButtonLabelMin)
                            .optional(),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    annotations: zod_1.z
                        .array(zod_1.z.object({
                        form: zod_1.z.object({
                            name: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin)
                                .optional(),
                            fields: zod_1.z
                                .array(zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }))
                                .min(1),
                            enabled: zod_1.z.boolean().optional(),
                        }),
                    }))
                        .optional(),
                    type: zod_1.z.enum(['PLAYER_360']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    annotations: zod_1.z
                        .array(zod_1.z.object({
                        form: zod_1.z.object({
                            name: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin)
                                .optional(),
                            fields: zod_1.z
                                .array(zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }))
                                .min(1),
                            enabled: zod_1.z.boolean().optional(),
                        }),
                    }))
                        .optional(),
                    type: zod_1.z.enum(['PLAYER_VIDEO']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['REPORT']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['ANNOTATION_PANORAMA']),
                    forms: zod_1.z.array(zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemNameMin),
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin)
                            .optional(),
                        fields: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }))
                            .min(1),
                        enabled: zod_1.z.boolean().optional(),
                    })),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['SWITCH']),
                    cases: zod_1.z.array(zod_1.z.object({
                        flow: zod_1.z
                            .object({
                            components: zod_1.z.unknown(),
                        })
                            .optional(),
                        conditions: zod_1.z.array(zod_1.z.object({
                            operator: zod_1.z.enum([
                                'EQUALS',
                                'NOT_EQUALS',
                                'CONTAINS',
                                'NOT_CONTAINS',
                                'GREATER_THAN',
                                'LESS_THAN',
                                'GREATER_THAN_OR_EQUAL',
                                'LESS_THAN_OR_EQUAL',
                                'REGEX_MATCH',
                            ]),
                            value: zod_1.z.string().min(1),
                            label: zod_1.z.string().min(1),
                            index: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseFlowOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin),
                        })),
                    })),
                }),
            ])),
        }),
    })
        .describe('Associated Acquisition Flow'),
    pipeline: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        json: zod_1.z.object({
            report: zod_1.z.object({}).optional(),
            roomplans: zod_1.z
                .object({
                categories: zod_1.z
                    .object({
                    livingRoom: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesLivingRoomDefault),
                    waterRoom: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesWaterRoomDefault),
                    storageRoom: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesStorageRoomDefault),
                    technicalRoom: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesTechnicalRoomDefault),
                    ancillaryRoom: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesAncillaryRoomDefault),
                    circulation: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCirculationDefault),
                    outdoor: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOutdoorDefault),
                    commonArea: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesCommonAreaDefault),
                    other: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansCategoriesOtherDefault),
                })
                    .optional(),
                addSurfaceInfo: zod_1.z
                    .boolean()
                    .default(exports.getArticleByIdResponsePipelineOneJsonOneRoomplansAddSurfaceInfoDefault),
            })
                .optional(),
            costing: zod_1.z.object({}).optional(),
            virtualTour: zod_1.z
                .object({
                imageProcessing: zod_1.z
                    .object({
                    enhance_contrast: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingEnhanceContrastDefault),
                    lod: zod_1.z
                        .array(zod_1.z.number())
                        .min(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMin)
                        .max(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodMax)
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingLodDefault),
                    icon_width: zod_1.z
                        .number()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingIconWidthDefault),
                    wb_target_a: zod_1.z
                        .number()
                        .min(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMin)
                        .max(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetAMax)
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetADefault),
                    wb_target_b: zod_1.z
                        .number()
                        .min(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMin)
                        .max(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBMax)
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWbTargetBDefault),
                    tripod_removal_method: zod_1.z
                        .enum(['AUTO', 'CIRCLE', 'POLYGON', 'SKIP', 'WATERSHED'])
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingTripodRemovalMethodDefault),
                    denoise_image: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingDenoiseImageDefault),
                    white_balance: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingWhiteBalanceDefault),
                    mask_windows: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourImageProcessingMaskWindowsDefault),
                })
                    .optional(),
                navigation: zod_1.z
                    .object({
                    minimap: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMinimapDefault),
                    visibility: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationVisibilityDefault),
                    mesh: zod_1.z
                        .boolean()
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourNavigationMeshDefault),
                })
                    .optional(),
                digitalTwin: zod_1.z
                    .object({
                    roomDisplayOrder: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinRoomDisplayOrderDefault),
                    excludedRooms: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinExcludedRoomsDefault),
                    levelDisplayOrder: zod_1.z
                        .array(zod_1.z.string())
                        .default(exports.getArticleByIdResponsePipelineOneJsonOneVirtualTourDigitalTwinLevelDisplayOrderDefault),
                })
                    .optional(),
            })
                .optional(),
            flow: zod_1.z
                .object({
                listOrder: zod_1.z
                    .array(zod_1.z.enum(['PROJECT', 'ZONE', 'ROOM', 'SURFACE', 'DAMAGE']))
                    .default(['PROJECT', 'ZONE', 'ROOM']),
            })
                .optional(),
            gaussianSplatting: zod_1.z
                .object({
                input: zod_1.z.enum(['CAPTURE', 'VIDEO']),
                content: zod_1.z.enum(['CAR', 'HOUSING', 'OTHER']),
            })
                .optional(),
        }),
    })
        .optional()
        .describe('Associated processing pipeline'),
    orderingConfig: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        json: zod_1.z.object({
            workflowType: zod_1.z.enum([
                'defaultOrderingWorkflow',
                'keyDepositWorkflow',
                'keyWithdrawalWorkflow',
                'visitOrderingWorkflow',
                'dpeOrderingWorkflow',
            ]),
            components: zod_1.z.array(zod_1.z.union([
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE']),
                    capture: zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureNameMin),
                        type: zod_1.z.enum(['CAR', 'ROOM', 'HOUSING', 'OTHER', 'FREE']),
                        config: zod_1.z.object({
                            type: zod_1.z.enum(['CAR', 'ROOM', 'HOUSING', 'OTHER', 'FREE']),
                            alerts: zod_1.z
                                .array(zod_1.z.enum(['SPEED', 'LIGHT', 'ORIENTATION', 'STRAIGHT']))
                                .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneCaptureConfigAlertsDefault),
                            orientation: zod_1.z.enum(['PORTRAIT', 'LANDSCAPE']),
                            focusMode: zod_1.z.enum(['AUTO']),
                            viewFinder: zod_1.z.boolean(),
                            stopWatch: zod_1.z.boolean(),
                            captureLimit: zod_1.z.number().optional(),
                            roomPlan: zod_1.z.boolean(),
                            displayProgressBar: zod_1.z.boolean(),
                            validationThreshold: zod_1.z.number().optional(),
                            maxValue: zod_1.z.number().optional(),
                            params: zod_1.z.object({
                                recommendedCodec: zod_1.z.enum(['H265']),
                                bitRate: zod_1.z.number(),
                                iFrameInterval: zod_1.z.number(),
                                targetFrameRate: zod_1.z.number(),
                            }),
                        }),
                    }),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    startInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneStartInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                    endInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneEndInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE_PANORAMA']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    startInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoStartInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                    endInstructions: zod_1.z
                        .array(zod_1.z.object({
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemTwoEndInstructionsItemDescriptionMin),
                        iconUrl: zod_1.z.string(),
                    }))
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CAPTURE_PANORAMA_V2']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemThreeTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                    multibracket: zod_1.z
                        .enum(['NO_BRACKET', 'BRACKET_3', 'BRACKET_5', 'BRACKET_7'])
                        .optional(),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['CONNECTION']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFourTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['DECONNECTION']),
                    tutorial: zod_1.z.object({
                        title: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialTitleMin),
                        screens: zod_1.z
                            .array(zod_1.z.object({
                            message: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemMessageMin),
                            highlights: zod_1.z.array(zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemHighlightsItemMin)),
                            animationUrl: zod_1.z.string(),
                            position: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemFiveTutorialScreensItemPositionMin),
                        }))
                            .min(1),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['EXPORT']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['EXTRACT_ROOMPLAN']),
                    itemType: zod_1.z.enum(['SURFACE', 'ROOM']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['FORM']),
                    form: zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormNameMin),
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormDescriptionMin)
                            .optional(),
                        fields: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemEightFormFieldsItemConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }))
                            .min(1),
                        enabled: zod_1.z.boolean().optional(),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['LIST']),
                    flow: zod_1.z.object({
                        components: zod_1.z.unknown(),
                    }),
                    config: zod_1.z.object({
                        editable: zod_1.z.boolean(),
                        defaultName: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigDefaultNameMin),
                        displayMode: zod_1.z.enum(['THUMBNAIL', 'LIST', 'LIST_THUMBNAILS']),
                        emptyState: zod_1.z.object({
                            title: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateTitleMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigEmptyStateDescriptionMin)
                                .optional(),
                            iconUrl: zod_1.z.string().optional(),
                        }),
                        tooltip: zod_1.z
                            .object({
                            title: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipTitleMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigTooltipDescriptionMin)
                                .optional(),
                            iconUrl: zod_1.z.string().optional(),
                        })
                            .optional(),
                        minValue: zod_1.z
                            .number()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigMinValueMin)
                            .optional(),
                        maxValue: zod_1.z.number().min(1).optional(),
                        firstButtonLabel: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigFirstButtonLabelMin)
                            .optional(),
                        secondButtonLabel: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemNineConfigSecondButtonLabelMin)
                            .optional(),
                    }),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    annotations: zod_1.z
                        .array(zod_1.z.object({
                        form: zod_1.z.object({
                            name: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormNameMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormDescriptionMin)
                                .optional(),
                            fields: zod_1.z
                                .array(zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnezeroAnnotationsItemFormFieldsItemConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }))
                                .min(1),
                            enabled: zod_1.z.boolean().optional(),
                        }),
                    }))
                        .optional(),
                    type: zod_1.z.enum(['PLAYER_360']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    annotations: zod_1.z
                        .array(zod_1.z.object({
                        form: zod_1.z.object({
                            name: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormNameMin),
                            description: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormDescriptionMin)
                                .optional(),
                            fields: zod_1.z
                                .array(zod_1.z.object({
                                type: zod_1.z.enum([
                                    'TEXT',
                                    'SELECT',
                                    'RADIO',
                                    'CHECKBOX',
                                    'FILE',
                                    'EMAIL',
                                    'PHONE',
                                    'DATE',
                                    'TIME',
                                    'TEXTAREA',
                                    'URL',
                                    'NUMBER',
                                    'DIVIDER',
                                    'RGBD',
                                    'SIGNATURE',
                                ]),
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemLabelMin),
                                placeholder: zod_1.z.string().min(1).optional(),
                                position: zod_1.z.number().min(1),
                                options: zod_1.z
                                    .array(zod_1.z.object({
                                    label: zod_1.z
                                        .string()
                                        .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsItemLabelMin),
                                    value: zod_1.z.string(),
                                }))
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemOptionsMin)
                                    .optional(),
                                helpText: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemHelpTextMin)
                                    .optional(),
                                config: zod_1.z.object({
                                    step: zod_1.z
                                        .number()
                                        .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigStepMin)
                                        .optional(),
                                    extensions: zod_1.z
                                        .array(zod_1.z.union([
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemOneRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemTwoRegExp),
                                        zod_1.z
                                            .string()
                                            .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigExtensionsItemThreeRegExp),
                                    ]))
                                        .optional(),
                                    unit: zod_1.z.string().optional(),
                                    multiple: zod_1.z.boolean(),
                                    editable: zod_1.z.boolean().optional(),
                                    required: zod_1.z.boolean(),
                                    personalData: zod_1.z
                                        .boolean()
                                        .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOneoneAnnotationsItemFormFieldsItemConfigPersonalDataDefault),
                                    enabled: zod_1.z.boolean().optional(),
                                    key: zod_1.z.string().min(1).optional(),
                                }),
                            }))
                                .min(1),
                            enabled: zod_1.z.boolean().optional(),
                        }),
                    }))
                        .optional(),
                    type: zod_1.z.enum(['PLAYER_VIDEO']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['REPORT']),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['ANNOTATION_PANORAMA']),
                    forms: zod_1.z.array(zod_1.z.object({
                        name: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemNameMin),
                        description: zod_1.z
                            .string()
                            .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemDescriptionMin)
                            .optional(),
                        fields: zod_1.z
                            .array(zod_1.z.object({
                            type: zod_1.z.enum([
                                'TEXT',
                                'SELECT',
                                'RADIO',
                                'CHECKBOX',
                                'FILE',
                                'EMAIL',
                                'PHONE',
                                'DATE',
                                'TIME',
                                'TEXTAREA',
                                'URL',
                                'NUMBER',
                                'DIVIDER',
                                'RGBD',
                                'SIGNATURE',
                            ]),
                            label: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemLabelMin),
                            placeholder: zod_1.z.string().min(1).optional(),
                            position: zod_1.z.number().min(1),
                            options: zod_1.z
                                .array(zod_1.z.object({
                                label: zod_1.z
                                    .string()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsItemLabelMin),
                                value: zod_1.z.string(),
                            }))
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemOptionsMin)
                                .optional(),
                            helpText: zod_1.z
                                .string()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemHelpTextMin)
                                .optional(),
                            config: zod_1.z.object({
                                step: zod_1.z
                                    .number()
                                    .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigStepMin)
                                    .optional(),
                                extensions: zod_1.z
                                    .array(zod_1.z.union([
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemOneRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemTwoRegExp),
                                    zod_1.z
                                        .string()
                                        .regex(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigExtensionsItemThreeRegExp),
                                ]))
                                    .optional(),
                                unit: zod_1.z.string().optional(),
                                multiple: zod_1.z.boolean(),
                                editable: zod_1.z.boolean().optional(),
                                required: zod_1.z.boolean(),
                                personalData: zod_1.z
                                    .boolean()
                                    .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnethreeFormsItemFieldsItemConfigPersonalDataDefault),
                                enabled: zod_1.z.boolean().optional(),
                                key: zod_1.z.string().min(1).optional(),
                            }),
                        }))
                            .min(1),
                        enabled: zod_1.z.boolean().optional(),
                    })),
                }),
                zod_1.z.object({
                    position: zod_1.z.number(),
                    navigation: zod_1.z.string().optional(),
                    type: zod_1.z.enum(['SWITCH']),
                    cases: zod_1.z.array(zod_1.z.object({
                        flow: zod_1.z
                            .object({
                            components: zod_1.z.unknown(),
                        })
                            .optional(),
                        conditions: zod_1.z.array(zod_1.z.object({
                            operator: zod_1.z.enum([
                                'EQUALS',
                                'NOT_EQUALS',
                                'CONTAINS',
                                'NOT_CONTAINS',
                                'GREATER_THAN',
                                'LESS_THAN',
                                'GREATER_THAN_OR_EQUAL',
                                'LESS_THAN_OR_EQUAL',
                                'REGEX_MATCH',
                            ]),
                            value: zod_1.z.string().min(1),
                            label: zod_1.z.string().min(1),
                            index: zod_1.z
                                .number()
                                .min(exports.getArticleByIdResponseOrderingConfigOneJsonOneComponentsItemOnefourCasesItemConditionsItemIndexMin),
                        })),
                    })),
                }),
            ])),
            ignoreKeys: zod_1.z
                .array(zod_1.z.string())
                .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneIgnoreKeysDefault),
            saveKeys: zod_1.z
                .array(zod_1.z.string())
                .default(exports.getArticleByIdResponseOrderingConfigOneJsonOneSaveKeysDefault),
        }),
    })
        .describe('Associated order configuration'),
    requiredDeliverableTypes: zod_1.z
        .array(zod_1.z.enum([
        'SHOWROOM',
        'ROOMPLANS',
        'VIRTUAL_TOUR',
        'GAUSSIAN_SPLATTING',
        'FLYTHROUGH',
        'REPORT',
        'COSTING',
        'LINK',
        'ENERGY_PERFORMANCE_DIAGNOSTICS',
    ]))
        .optional(),
    pricingInformations: zod_1.z
        .object({
        skuTemplate: zod_1.z.string().describe('The SKU template used for pricing'),
        surfaceRanges: zod_1.z
            .array(zod_1.z.object({
            skuValue: zod_1.z
                .string()
                .describe('The value to replace the placeholder with'),
            min: zod_1.z.number().describe('The min value of the range'),
            max: zod_1.z.number().describe('The max value of the range'),
        }))
            .optional()
            .describe('The name of the article'),
    })
        .optional(),
});
