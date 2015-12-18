# Node KeystoneJS Portfolio Site

Nice-looking out-of-the-box portfolio site, built on top of Node, MongoDB, [KeystoneJS](http://keystonejs.com/ "KeystoneJS") and [mongoose](http://keystonejs.com/ "http://mongoosejs.com/"). Also uses JQuery, Bootstrap 3, [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup "Magnific-Popup") and [mixitup](https://github.com/patrickkunka/mixitup "mixitup").

Demo at [ryanswalton.com](http://www.ryanswalton.com/ "Ryan Walton Portfolio Site").

## Installation

To install, clone this repository. Then create a `.env` file in root directory, adding the following environment variables:

    COOKIE_SECRET=[SECRET_KEY]

    MONGOLAB_URI=[MONGODB_URI]
    S3_BUCKET=[S3_BUCKET]
    S3_KEY=[S3_KEY]
    S3_SECRET=[S3_SECRET]

Again in the root directory, run `node keystone`. You should then be up and running if you correctly installed all the dependencies.

More detailed installation instructions can be found on the KeystoneJS [Getting Started](http://keystonejs.com/docs/getting-started/ "KeystoneJS Getting Started") guide.

This portfolio site uses the handlebars and grunt version of the `yo keystone` starter app.

## Usage

All of the models to populate your portfolio are set up and ready for you to add content to. Here is a rough overview of how it's all structured.

##### Project

Each project is displayed in the projects section.

##### Project Item

Each project item is associated with a project and provides the details on the project details page.

##### Images

Where you add all your images (.png, .jpg, .svg). In the other models, you can associate these assets, such as with Projects and Project Items.

##### Videos

You can add either YouTube or Vimeo url's here, which are then displayed appropriately when associated with another model. Similar to how Images work.

##### Project Category

Project Categories are used with projects. These categories are used to create the project filter in the projects section.

##### Stage

Stages are used with project items. Stages create the navigable rows in the project details page.

##### Site Info

Create one of these, adding your personal information in the corresponding fields.

## Issues

If you face any issues or have questions, let me know!
