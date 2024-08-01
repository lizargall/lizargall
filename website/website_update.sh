#! /bin/bash

# Script to update docusaurus website. Needs to be run from the build repo's website directory. 

read -p "Commit Message:" MESSAGE 
git add -v ..
git commit -m "$MESSAGE"
git push
echo "\"$MESSAGE\" pushed to build repo"
npm run build # Build the site

if [ $? -eq 0 ]; then # Check if any error message was triggered
    echo "Site successfully built"
else
    echo "Site did not build, use \`npm run start\` to check for error messages"
    exit 1
fi

if [ $(ls -A "build/" | wc -l) -eq 2 ]; then # Check if there are files other than . and .. in the directory.
    echo "Build folder is empty, check that \`npm run start\` built in the correct repository. "
    exit 1
else
    echo "Preparing deploy repository..."
fi

rm -r ~/repos/lizargall.github.io/docs/* # Prepare the deploy repository by deleting all the contents of the docs folder
mv build/* ~/repos/lizargall.github.io/docs # Move the contents of the build directory in the build repo to the deploy repo.
ls -l ~/repos/lizargall.github.io/docs 
cd ~/repos/lizargall.github.io/ 
git add -v ~/repos/lizargall.github.io/docs
git commit -m "$MESSAGE"
git push
echo "\"$MESSAGE\" pushed to deploy repo"
