var firebaseUtil = require('firebase-util');

// place fbutil onto firebase.util namespace
// if we are in the browser and firebase exists
if( global.firebase ) {
  global.firebase.util = firebaseUtil;
}

module.exports = firebaseUtil;