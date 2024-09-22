// GOPen/Close sidebar - Javascript

// Create object id array
var id_array = function() {
  this.div = "mySidenav";
}

var class_array = function() {
  this.sidenav_opt = "sidenav_opt";
  this.sidenav_icon = "sidenav_icon";
}

// Create object sidenav
var sidenav = function(html_doc, html_window, id, classes) {

  // global var
  var self = this;
  var i = 0;

  // sidenav state
  this.state = false;

  // HTML links
  this.document = html_doc;
  this.window = html_window;
  this.id = id;
  this.classes = classes;

  // Sidenav elements
  // ID
  this.div = id.div;
  // CLASS
  this.sidenav_opt = this.document.getElementsByClassName(this.classes.sidenav_opt);

  // method to open the sidenav
  this.openNav = function() {
    this.document.getElementById(this.id.div).style.width = "250px";
    this.state = true;
  }

  // method to close the sidenav
  this.closeNav = function() {
    this.document.getElementById(this.id.div).style.width = "0px";
    this.state = false;
  }

  // method ESC behavior
  this.document.onkeydown = function(keypress) {
    //keypress = keypress || this.window.event;
    if (keypress.key === 'Escape') {
        if (self.state === false) {
            self.openNav();
        }
        else if (self.state === true) {
            self.closeNav();
        }
    }
  }

  // method on MENU icon click
  //this.menu.onclick = function() { self.openNav() }

  // method on SIDENAV_OPT Class click
  for (i=0; i<this.sidenav_opt.length; i++) {
      this.sidenav_opt[i].onclick = function() {
        if (self.state === false) {
            self.openNav();
        }
        else if (self.state === true) {
            self.closeNav();
        }
      }
  }
}


// var definitions
var classes = new class_array();
var id = new id_array();
var mybar = new sidenav(document, window, id, classes);

// JUNK
//console.log(classes);
