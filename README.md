# package-to-tsd

Uses dependencies from package.json to call 'tsd install'. Needs tsd to be installed globally.

**Usage:** Run 'package-to-tsd' in the root of your project where package.json lives. The result will be the same as calling 'tsd install $DEP --save' where $DEP will be each dependency in the package.json.


