# MVP architecture
(Model-View-Presenter)

is a derivation of the model–view–controller (MVC) architectural pattern, and is used mostly for building user interfaces. In MVP, the presenter assumes the functionality of the "middle-man". In MVP, all presentation logic is pushed to the presenter.

## Main parts of MVP
* Model - is an interface defining the data to be displayed or otherwise acted upon in the user interface.
* View - is a passive interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data.
* Presenter - acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.

![MVP architecture scheme](./img/mvp.png)