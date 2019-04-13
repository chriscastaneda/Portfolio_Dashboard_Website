app.service('dashboard', function () {
    $this = this,
    $this.title = '', //Set title to home.js
    $this.getTitle = function () { //Get title from home.js
        return $this.title;
    }
})