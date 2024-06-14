// Copyright (c) 2024 Angel All rights reserved.
// 
// Created by: Angel
// Created on: Jun. 11, 2024
// This file which contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area and perimeter of a rectangle.
 */
function calculate() { 
  // input
  Let length = parseInt(document.getElementById("length-input").value);
  Let width = parseInt(document.getElementById("width-input").value);

  // process
  Let area = length * width; 
  Let perimeter = 2 * (length +  width);

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²";  
  document.getElementById("perimeter").innerHTML = "Perimeter is: " + perimeter + " cm
}