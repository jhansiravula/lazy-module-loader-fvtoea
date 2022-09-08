/* ------------------------------------------------------------------------ *

DASHBOARD LAYOUT
+-------+----+----+----+----+----+----+----+----+----+----+-------+
|app-sidebar |       .leftpanel       |          .rightpanel      |
|            |                        |                           |
|            |                        |                           |
|            |                        |                           |
+-------+----+----+----+----+----+----+----+----+----+----+-------+

    
# Global CSS files
The global folder strictly contains CSS layout and style rules which are used throughout the entire application.
These are kept 1 level of specificity deep

## GLOBAL STYLE IDEAS
every selector is set to display:flex; in the normalize.scss 
* { display:flex; flex-flow: row wrap; }
  - flex layout is set on everything because it would be set on 75% of elements anyways.

## Using BEM:
  This project is loosly based on BEM standards http://getbem.com/introduction/


# Component Notes

### app-sidebar.component 
I'll add a link to the example component soon. If you want it earlier, reach out https://twitter.com/BenRacicot

This component can be used anywhere. It opens and closes via CSS .open on <app-root>.
Toggling open/closed states can be controlled via its service
Its content is authed content right now but should be updated to serve any content, anywhere.
