"use strict"

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

import "./styles/main.scss"

import CookieConsent from "./models/CookieConsent"

if (typeof exports !== 'undefined') {
  module.exports = CookieConsent
} else {
  window.CookieConsent = CookieConsent
}