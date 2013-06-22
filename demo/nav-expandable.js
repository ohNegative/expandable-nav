// JavaScript Document
var $mtv = jQuery.noConflict();
$mtv(document).ready(storeId);
$mtv(document).ready(retrieveExpand);





//get the id on the div and then store as a string
function storeId() {
    $mtv('.features > ul > li > a').click(function() {
        var name = $mtv(this).attr('id')
        localStorage.setItem( 'name', (name) );
    });
};

//retrieve the storage item and compare to id clicked
function retrieveExpand() {
    localStorage.getItem( 'name' );
    var retrieve = localStorage.getItem('name');
    $mtv("#" + retrieve).parent().find(".sub-level").show(); 
};


