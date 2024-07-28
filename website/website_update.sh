#! /bin/sh

# Script to update docusaurus website 
cd ~/repos/lizargall/ # Go to the build repository 
git add -v ~/repos/lizargall/website
git commit -m "update Warehouse Circus page"
git push
cd website
npm run build # Build the site
rm -r ~/repos/lizargall.github.io/docs/* # Prepare the deploy repository by deleting all the contents of the docs folder
mv build/* ~/repos/lizargall.github.io/docs # Move the contents of the build directory in the build repo to the deploy repo.
ls -l ~/repos/lizargall.github.io/docs 
cd ~/repos/lizargall.github.io/ 
git add .
git commit -m "update Warehouse Circus page"
git push