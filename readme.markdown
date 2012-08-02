#jQuery unified field plugin
A plugin that unifies a label and it's field so they are displayed together and the label slides out of the way when a user wants to input content.

##Usage
Simply call `.unify()` on the `input`, `textarea`, or content editable `div`, and place a `label`tag before the specified element.

###Options

####Padding
If the position within the field isn't quite right, you can control the
`padding_start` and `padding_end` options.  These will add the appropriate
padding to the left or right respectively.

####Speed
The speed the label moves can be controlled with the `focus_speed` and
`blur_speed` options.  Each defaults to `600ms`.

####Hiding the helper text
The help text can be hidden after a certain number of letters have been
typed.  `vanishing_length` controls this, and it's default is `5`
characters.

####Opacity
The opacity of the label can be modified by changing the `opacity` and
`focus_opacity` labels.  By default they are `0.8` and `0,4`
respectively.

##Examples
The included `base.html` file contains a variety of examples (really
test cases).
