// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of a trapezoid.
 */
function calculate () {
  // input
  let sideA = parseFloat(document.getElementById('side-a-of-trapezoid').value)
  
  let sideB = parseFloat(document.getElementById('side-b-of-trapezoid').value)

  let sideC = parseFloat(document.getElementById('side-c-of-trapezoid').value)
  
  let sideD = parseFloat(document.getElementById('side-d-of-trapezoid').value)
  
  let height = parseFloat(document.getElementById('height-of-trapezoid').value)
  
  // process
  const area = (sideA + sideB) * height/2
  const perimeter = sideA + sideB + sideC + sideD
  
  // output
  document.getElementById('area').innerHTML = 'The area of the trapezoid is: ' + area.toFixed(2) + ' cm²'
  document.getElementById('perimeter').innerHTML = 'The perimeter of the trapezoid is: ' + perimeter.toFixed(2) + ' cm²'
}