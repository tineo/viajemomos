//require('../css/app.scss');
var $ = require('jquery');
require('popper.js');
require('bootstrap');

var map;
var marker;
var markerLima;

$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})

function initMap() {
    var uluru = {lat: -12.0501439, lng: -77.0360437};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        center: uluru
    });
    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    markerLima = new google.maps.Marker({
        position:  {lat: -12.0568703, lng: -77.0624494},
        map: map
    });
}

//function moveBus( map, marker ) {
//};

$(function () {

    if($("#map").length > 0){
    $(".place").click(function (evt) {
        console.log($(this).data("lat"))
        console.log($(this).data("lng"))

        marker.setPosition( new google.maps.LatLng( $(this).data("lat"), $(this).data("lng") ) );
        map.panTo( new google.maps.LatLng( $(this).data("lat"), $(this).data("lng") ) );

        var markers = [marker, markerLima];//some array
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }

        map.fitBounds(bounds);

    });

    initMap();
    }
})