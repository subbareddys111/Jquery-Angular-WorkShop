function validate() {
    var errorNode = this.parentNode.querySelector( ".error" ),
        span = document.createElement( "span" )
    
    this.classList.remove( "invalid" );
    if ( errorNode ) {
        errorNode.parentNode.removeChild( errorNode );
    }

    if ( !this.validity.valid ) {
        this.classList.add( "invalid" );
        this.parentNode.appendChild( span );
        span.classList.add( "error" );
        span.innerHTML = this.getAttribute(
            this.validity.valueMissing ? "data-required-message" : "data-type-message" );
    }
};

var form = document.querySelector( "form" ),
    inputs = form.querySelectorAll( "input" );

for ( var i = 0; i < inputs.length; i++ ) {
    inputs[ i ].addEventListener( "blur", validate );
    inputs[ i ].addEventListener( "invalid", validate );
};

// Turn off the bubbles
form.addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );

// Support: Safari, iOS Safari, default Android browser
document.querySelector( "form" ).addEventListener( "submit", function( event ) {
    if ( this.checkValidity() ) {
        alert( "Form is submitted" );
    } else {
        event.preventDefault();
    }
});
