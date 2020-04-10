/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: commentor.js
Date: 12/19/18
Programmer: Illya King
*/

// The line below is to test your link to the .js file. 
// Please comment it out (put // in front).
// alert("the link to the .js file is correct!");

$(document).ready(function () {
    
    document.getElementById("commodity").focus();
    
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    var special = [" ", ",", ".", "\n", "Reference: ~~ADD WEBSITE ADDRESS~~."];
    
    $("#textOne").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[0]));
    });
    
    $("#textTwo").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[1]));
    });
    
    $("#textThree").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[2]));
    });
    
    $("#textFour").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[3]));
    });
    
    $("#textFive").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[4]));
    });
    
    $("#textSix").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[5]));
    });
    
    $("#textSeven").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[6]));
    });
    
    $("#textEight").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[7]));
    });
    
    $("#textNine").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[8]));
    });
    
    $("#textZero").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + numbers[9]));
    });
    
    $("#comma").on("click", function () {
        $('#description').val(($('#description').val() + special[1]));
    });
    
    $("#period").on("click", function () {
        $('#description').val(($('#description').val() + special[2]));
    });
    
    $("#return").on("click", function () {
        $('#description').val(($('#description').val() + special[3]));
    });
    
    $("#addHTTP").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + special[4]));
    });
    
    var conjuction = ["and", "in", "on", "to"];
    
    $("#andText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + conjuction[0]));
    });
    
    $("#inText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + conjuction[1]));
    });

    $("#onText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + conjuction[2]));
    });
    
    $("#toText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + conjuction[3]));
    });
    
    var states = [ "KD,", "KD Flat,", "SU,", "nested", "not nested", "banded", "wrapped"];
    
    $("#kdText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[0]));
    });
    
    $("#kdFlat").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[1]));
    });
    
    $("#suText").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[2]));
    });
    
    $("#nested").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[3]));
    });
    
    $("#notNested").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[4]));
    });
    
    $("#banded").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[5]));
    });
    
    $("#wrapped").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + states[6]));
    });
    
    var packaging = [ "bundle,", "bundles,", "loose", "Bulk Commodity Totes,", "pails,", "boxed,", "boxes,", "bags,", "drums,", "rolls,", "crated", "crates", "frame,", "frames,", "pallet", "pallets", "skid", "skids", "totes,", "bottles,", "metal", "plastic", "shipping", "steel", "wooden", "machined pressed", "tank", "tanks", "tube,", "tubes,"];
                     
    $("#bundleSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[0]));
    });
    
    $("#machinePressed").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[25] + special[0] + packaging[1]));
    });
    
    $("#bundlePlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[1]));
    });
    
    $("#loose").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[2]));
    });
    
    $("#bulkTotes").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[3]));
    });

    $("#pails").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[4]));
    });

    $("#boxSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[5]));
    });
    
    $("#boxPlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[6]));
    });

    $("#bags").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[7]));
    });
    
    $("#drums").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[8]));
    });
    
    $("#rolls").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[9]));
    });
    
    $("#crateSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[10]));
    });
    
    $("#cratePlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[11]));
    });
    
    $("#frameSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[12]));
    });
    
    $("#framePlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[13]));
    });
    
    $("#palletSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[14]));
    });
    
    $("#palletPlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[15]));
    });
    
    $("#skidSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[16]));
    });
    
    $("#skidPlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[17]));
    });
    
    $("#totes").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[18]));
    });
    
    $("#bottles").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[19]));
    });
    
    $("#metal").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[20]));
    });
    
    $("#plastic").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[21]));
    });
    
    $("#shipping").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[22]));
    });
    
    $("#steel").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[23]));
    });
    
    $("#wooden").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[24]));
    });
    
    $("#tankSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[26]));
    });
    
    $("#tankPlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[27]));
    });
    
    $("#tubeSingle").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[28]));
    });
    
    $("#tubePlural").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + packaging[29]));
    });
    
    var reasons = [ "This freight was originally tendered using class ~~ADD CLASS~~ from NMFC ~~ADD NMFC~~, which was intended for ~~ADD DESCRIPTION~~ with a density measuring over ~~ADD PCF~~ PCF but less than ~~ADD PCF~~ PCF. The class was changed due to the actual density of the freight being ~~ADD PCF~~ PCF.",
                    "This freight was originally tendered using class ~~ADD CLASS~~ from NMFC ~~ADD NMFC~~, which was intended for ~~ADD DESCRIPTION~~ with a density measuring over ~~ADD PCF~~ PCF but less than ~~ADD PCF~~ PCF. Visual inspection revealed tendered description to be incorrect. The NMFC was assigned due to visual inspection and the class was changed due to the actual density of the freight being ~~ADD PCF~~ PCF.",
                    "This freight was originally tendered using class ~~ADD CLASS~~ from NMFC ~~ADD NMFC~~, which was intended for ~~ADD DESCRIPTION~~ with a density measuring over ~~ADD PCF~~ PCF but less than ~~ADD PCF~~ PCF. description on packing list revealed tendered description to be incorrect. The NMFC was assigned due to description on packing list and the class was changed due to the actual density of the freight being ~~ADD PCF~~ PCF. An indirect photo was taken to protect the integrity of the packaging.",
                    "Originally tendered using class ~~ADD CLASS~~ but with no NMFC. The NMFC was assigned due to visual inspection and the class was assigned due to the actual density of ~~ADD PCF~~ PCF.",
                    "Freight was not rated nor classed. The NMFC was assigned due to visual inspection and the class was assigned due to the actual density of ~~ADD PCF~~ PCF.",
                    "No NMFC or class was used to tender this shipment. The NMFC was assigned due to description on packing list and class was assigned due to the actual density of ~~ADD PCF~~ PCF. An indirect photo was taken to protect the integrity of the packaging.",
                    "Originally tendered using class ~~ADD CLASS~~ but with no NMFC. The NMFC was assigned due to description on packing list and the class was assigned due to the actual density of ~~ADD PCF~~ PCF. An indirect photo was taken to protect the integrity of the packaging.",
                    "this freight was correctly rated but incorrectly described.",
                    "this freight was correctly rated and described."];
    
    $("#rightNMFCClassChange").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[0]));
    });
    
    $("#wrongNMFCCorrectNMFC").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[1]));
    });
    
    $("#wrongNMFCIndirectProof").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[2]));
    });
    
    $("#classNoNMFC").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[3]));
    });
    
    $("#classNoNMFCIndirectProof").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[6]));
    });
    
    $("#noClassNoNMFCProof").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[4]));
    });
    
    $("#noClassNoNMFCIndirect").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[5]));
    });
    
    $("#correctClassIncorrectDescription").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[7]));
    });
    
    $("#correctNMFCCorrectClass").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + reasons[8]));
    });
    
    var itemRules = [   "PER NMFC ITEM 360 sec. 3, this freight was opened to verify contents.",
                        "No value was declared on BOL. Per ITEM 420 Sec 5. Line A.1, The class containing the maximum liability not exceeding $5.00 per pound was applied.",
                        "Per NMFC ITEM 422, Shipment reclassified to highest article in combination.",
                        "Per NMFC ITEM 424 (Referring to Classification of Parts or Pieces of a Complete Article), The classification was applied for the complete article.",
                        "Per ITEM 425 (Referring to recondition articles), this freight has been reconditioned and is considered new and not used.",
                        "Commodity occupies ~~ADD LENGTH~~ inches by ~~ADD WIDTH~~ inches by ~~ADD HEIGHT~~ inches, which is ~~ADD PERCENTAGE~~% of a lift truck skids, pallets or platforms with a surface area of ~~ADD LENGTH~~ inches and ~~ADD WIDTH~~ inches or ~~ADD SQUARE INCHES~~ square inches of space. Shipment also meets the stability requirement of NMFC item 680 note c. ITEM 680 applies.",
                        "Commodity is ~~ADD LENGTH~~ inches by ~~ADD WIDTH~~ inches by ~~ADD HEIGHT~~ inches, resulting in  occupying ~~ADD PERCENTAGE~~% of the container.",
                        "Per FXF ITEM 750-8, This freight is being delivered to a limited access location listed in ITEM 750-8. The Limited Access Location charge applies.",
                        "Mixed rates apply as stated in FXF Rules Tariff Item 640- UNLESS OTHERWISE PROVIDED, SHIPMENTS THAT CONSIST OF DIFFERENTLY CLASSED ARTICLES CONTAINED IN OR ON ONE HANDLING UNIT THAT HAVE BEEN INSPECTED AND THE INSPECTION DETERMINES THE SHIPPER’S INFORMATION WAS INACCURATE, THE HANDLING UNIT WILL BE RATED AT THE CLASS SHOWN IN PARAGRAPH 2 BASED ON THE DENSITY OF THE UNIT USING THE WEIGHT AND MEASUREMENTS.",
                        "No NMFC on OBOL - *NOBI*",
                        "Incorrect NMFC in OBOL - *ICBI*",
                        "Cannot Dimension shipment - *CDMI*"];
    
    $("#item360").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[0]));
    });
    
    $("#item420").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[1]));
    });

    $("#item422").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[2]));
    });
    
    $("#item424").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[3]));
    });
    
    $("#item425").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[4]));
    });
    
    $("#item640").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[8]));
    });
    
    $("#item750Eight").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[7]));
    });

    $("#item680Pallet").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[5]));
    });

    $("#item680Container").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[6]));
    });
    
    $("#nobi").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[9]));
    });
    
    $("#icbi").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[10]));
    });
    
    $("#cdmi").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + itemRules[11]));
    });
    
    var stacking = [
        "This freight can be double stacked on itself and loaded on deck boards and load racks.",
        "This freight can be double stacked on itself but cannot be loaded on deck boards and load racks.",
        "This freight cannot be double stacked on itself but can be loaded on deck boards and load racks.",
        "This freight cannot be double stacked on itself nor can it be loaded on load racks.",
        "This freight cannot be double stacked on itself and it exceeds over half the height of the trailer.",
        "freight is equal or over 8 feet but less than 12 feet, over length charge applies.",
        "freight is equal or over 12 feet, extreme length charge applies.",
        "Freight is over 750 CUFT at ~~ADD CUFT~~ and under 4 PCF at ~~ADD PCF~~, Cubic Capacity and Load charge applies.",
        "Freight is over 180 inches at ~~ADD TOTAL LENGTH IN INCHES~~ inches, Capacity Load charge applies.",
        "Freight is over 15,000 lbs at ~~ADD TOTAL WEIGHT~~, Capacity Load charge applies.",
        "One more of the largest pallet can fit in the trailer.",
        "One more of the largest pallet cannot fit in the trailer."
        ];
    
    $("#canStackCanLoad").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[0]));
    });
    
    $("#canStackNoLoad").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[1]));
    });
    
    $("#cannotStackButCanLoad").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[2]));
    });

    $("#cannotStackNorLoad").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[3]));
    });
    
    $("#tooTall").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[4]));
    });
    
    $("#overLength").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[5]));
    });
    
    $("#extremeLength").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[6]));
    });
    
    $("#cubicCapacityAndDensity").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[7]));
    });
    
    $("#capacityLoad").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[8]));
    });
    
    $("#capacityLoad20k").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[9]));
    });
    
    $("#oneMore").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[10]));
    });
    
    $("#noMore").on("click", function () {
        $('#description').val(($('#description').val() + special[0] + stacking[11]));
    });
    
    $("#clear").on("click", function () {
        $("#commodity").val("");
        $("#description").val("");
        $("#commodity").focus();
    });

    $("#clearComments").on("click", function () {
        $("#description").val("");
        $("#description").focus();
    });
    
    $('#commodityButton').click(function () {
        $('#description').val($('#commodity').val() + ",");
    });
    
    $('#delete').click(function () {
        var inputString = $('#description').val();
        var shortenedString = inputString.substr(0, (inputString.length - 1));
        $('#description').val(shortenedString);
    });
      
    $("#copyText").click(function () {
        $("textarea").select();
        document.execCommand('copy');
    });

          
});