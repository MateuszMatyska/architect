# MVVM architecture
(Model-View-ViewModel)

one of the architectural patterns which enhances separation of concerns, it allows separating the user interface logic from the business (or the back-end) logic.

## Main parts of MVVM
* Model - refers either to a domain model, which represents real state content (an object-oriented approach), or to the data access layer, which represents content (a data-centric approach).
* View - is the structure, layout, and appearance of what a user sees on the screen. It displays a representation of the model and receives the user's interaction with the view.
* ViewModel - is an abstraction of the view exposing public properties and commands. ViewModel allow to communicate between Model and View.

![MVVM architecture scheme](./img/mvvm.png)