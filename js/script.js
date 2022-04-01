// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a trapazoid.
 */
function calculate () {
  // input
  let side a = parseFloat(document.getElementById('side-a-trapazoid').value)
  let side b = paseFloat(document.getElementId('side-b-trapazoid')
  
  // process
  let area = (a+b) * height/2

  // output
  document.getElementById('area').innerHTML = 'The area of the triangle is: ' + area + ' cm²'
}